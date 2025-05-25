# trabalho-analise

BubbleSort:

function bubblesort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) { // 0(n)
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--;
    } while (swapped); //0(n), se nao tiver ordenada
    return arr;
}

 Pior caso = O(n) * O(n) = O(n²)
 Melhor caso = O(n)

 -----------------------------------------------------------------------------------------------------------------------------

 QuickSort: 

function medianOfThree(arr, left, right) {
    const mid = Math.floor((left + right) / 2); 
    const a = arr[left], b = arr[mid], c = arr[right]; 

    if ((a > b) !== (a > c)) return left;
    else if ((b > a) !== (b > c)) return mid;
    else return right;
}

function quicksort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return arr;

    const pivotIndex = medianOfThree(arr, left, right);
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]]; 
    const pivot = arr[right];

    let i = left;

    for (let j = left; j < right; j++) { // O(n) 
        if (arr[j] < pivot) { 
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
            i++; 
        }
    }

    [arr[i], arr[right]] = [arr[right], arr[i]]; 

    quicksort(arr, left, i - 1); 
    quicksort(arr, i + 1, right);

    return arr;
}

Pior Caso = O(n) * O(n) = O(n²)  
Melhor caso = O(n) * O(log n) = O(n log n)  

 -----------------------------------------------------------------------------------------------------------------------------

 MergeSort: 

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const meio = Math.floor(arr.length / 2); 
    const esquerda = arr.slice(0, meio); // O(n) 
    const direita = arr.slice(meio);    // O(n) 

    return merge(
        mergeSort(esquerda), 
        mergeSort(direita)   
    );
}

function merge(esq, dir) {
    const resultado = []; 
    let i = 0;            
    let j = 0;            

    while (i < esq.length && j < dir.length) { // O(n)
        if (esq[i] < dir[j]) { 
            resultado.push(esq[i]); 
            i++; 
        } else {
            resultado.push(dir[j]); 
            j++; 
        }
    }

    return resultado.concat(esq.slice(i)).concat(dir.slice(j)); // O(n)
}

Melhor/Pior caso = O(n) * O(log n) = O(n log n)

 -----------------------------------------------------------------------------------------------------------------------------

 Resultados Testes Experimentais:

 Repetições: 10

 Tamanho: 100

Tempo médio - QuickSort (5 ms)
Tempo médio - BubbleSort (9 ms)
Tempo médio - MergeSort (25 ms)

 Tamanho: 1.000

Tempo médio - QuickSort (19 ms)
Tempo médio - MergeSort (40 ms)
Tempo médio - BubbleSort (109 ms)

 Tamanho: 10.000

Tempo médio - QuickSort (107 ms)
Tempo médio - MergeSort (469 ms)
Tempo médio - BubbleSort (9217 ms)


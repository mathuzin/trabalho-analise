function bubblesort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    return arr;
}


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
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]]; // Move pivô para o fim
    const pivot = arr[right];

    let i = left;

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]]; // Posição final do pivô

    quicksort(arr, left, i - 1);
    quicksort(arr, i + 1, right);

    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const meio = Math.floor(arr.length / 2);
    const esquerda = arr.slice(0, meio);
    const direita = arr.slice(meio);

    return merge(
        mergeSort(esquerda),
        mergeSort(direita)
    );
}

function merge(esq, dir) {
    const resultado = [];
    let i = 0;
    let j = 0;

    while (i < esq.length && j < dir.length) {
        if (esq[i] < dir[j]) {
            resultado.push(esq[i]);
            i++;
        } else {
            resultado.push(dir[j]);
            j++;
        }
    }

    return resultado.concat(esq.slice(i)).concat(dir.slice(j));
}


module.exports = { quicksort, bubblesort, mergeSort };


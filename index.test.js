const { quicksort, bubblesort, mergeSort } = require('./index');

function gerarArray(tamanho) {
    return Array.from({ length: tamanho }, () => Math.floor(Math.random() * tamanho));
}

function medirTempo(fn, arr) {
    const inicio = performance.now();
    fn([...arr]);
    const fim = performance.now();
    return fim - inicio;
}

describe('Benchmark de algoritmos de ordenacao', () => {
    const tamanho = 10000;
    const repeticoes = 10;
    const arrayOriginal = gerarArray(tamanho);

    test('Tempo medio - MergeSort', () => {
        let tempos = [];
        for (let i = 0; i < repeticoes; i++) {
            const tempo = medirTempo(mergeSort, arrayOriginal);
            tempos.push(tempo);
        }
        const media = tempos.reduce((a, b) => a + b) / tempos.length;
        console.log(`MergeSort - Media: ${media.toFixed(2)} ms`);
    });

    test('Tempo medio - QuickSort', () => {
        let tempos = [];
        for (let i = 0; i < repeticoes; i++) {
            const tempo = medirTempo(bubblesort, arrayOriginal);
            tempos.push(tempo);
        }
        const media = tempos.reduce((a, b) => a + b) / tempos.length;
        console.log(`QuickSort - Media: ${media.toFixed(2)} ms`)
    });

    test('Tempo medio - BubbleSort', () => {
        let tempos = [];
        for (let i = 0; i< repeticoes; i++) {
            const tempo = medirTempo(bubblesort, arrayOriginal);
            tempos.push(tempo);
        }
        const media = tempos.reduce((a, b) => a + b) / tempos.length;
        console.log(`BubbleSort - Media: ${media.toFixed(2)} ms`)
    });
});



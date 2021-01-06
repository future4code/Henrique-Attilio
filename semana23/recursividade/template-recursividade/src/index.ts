// const ascPrintNumbers = (n: number)  => {
//     if ( n >= 0) {
//         ascPrintNumbers(n-1);
//         console.log(n)
//     }
// }

// ascPrintNumbers(7)


// const descPrintNumbers = (n: number) => {
//     if ( n >=0 ) {
//         console.log(n);
//         descPrintNumbers(n-1)
//     }
// }

// descPrintNumbers(4)

// export const calculateSumTo = (
//     n: number,
//     acc: number = 0
// ): number => {
//     if(n === 0) {
//         return acc;
//     }
//     return calculateSumTo(n -1, acc + n)
// }

// console.log(calculateSumTo(4))

// export const printArray = ( arr: number[], i: number = arr.length -1) => {
//         if(i >= 0) {
//             printArray(arr, i -1 );
//             console.log(`Elemento ${i}:`, arr[i]);
//         }
//     };
// const array = [1, 2, 3, 4];
// printArray(array)


export const knowLengNumb = (n: number, leg: number = 0) => {
    console.log(n.lenght)
}

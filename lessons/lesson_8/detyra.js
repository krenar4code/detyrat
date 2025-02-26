// Homework: 

// Shkruaj nje program qe bashkon 2 array ne 1 duke i kopjuar elementet nga fundi i cdo array
// EX: array1 = [40,30,1] array2= [70,6,2] merged_array = [1,30,40,2,6,70]

// let array1 = [40,30,1];
// let array2 = [70,6,2];
// let merged_array = [];

// for (let i = array1.length - 1; i >= 0; i--) {
//     merged_array.push(array1[i]);
// }

// for (let i = array2.length - 1; i >= 0; i--) {
//     merged_array.push(array2[i]);
// }

// console.log(merged_array);




// Shkruaj nje program qe gjen mesataren e numrave negative te arrayt

// let array = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
// let count = 0;
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//         count++;
//         sum += array[i];
//     }

// }

// let average = sum / count;

// console.log(average);



// Shkruaj nje program qe printon "Sorted" nese array eshte e renditur ne rend zbrites(nga me e medhja tek me e vogla), dhe "Unsorted" nese nuk eshte

let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let sorted = true;

for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
        sorted = false;
        break;
    }

}

if (sorted) {
    console.log("Sorted");
} else {

    console.log("Unsorted");
}

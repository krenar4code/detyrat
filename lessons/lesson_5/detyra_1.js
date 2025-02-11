// Homework: 
// 1. Shkruaj nje program per 1 vendin-machine qe merr nga perdoruesi nje numer dhe printon vleren e produktit psh 1->CocaCola 5$. perdoruesi mund te zgjedhe nje nga 5 produkte


// let produkt = prompt("Zgjedhni produktin: 1->CocaCola 5$, 2->Fanta 4$, 3->Sprite 3$, 4->Pepsi 2$, 5->Mirinda 1$");

// switch (produkt) {
//     case "1":
//         console.log("CocaCola 5$");
//         break;
//     case "2":
//         console.log("Fanta 4$");
//         break;
//     case "3":
//         console.log("Sprite 3$");
//         break;
//     case "4":
//         console.log("Pepsi 2$");
//         break;
//     case "5":
//         console.log("Mirinda 1$");
//         break;
//     default:
//         console.log("Produkti nuk ekziston");
//         break;
// }


// // 2. Shkruaj nje program qe merr nga perdoruesi sasine e ujit ne litra dhe printon totalin e fatures. Cmimi i ujit eshte 0.2$/L deri ne 100L dhe per cdo liter shtej pas 100L eshte 0.4$

// let sasiaUjit = prompt("Shkruani sasin e ujit ne litra: ");
// let cmimiUjit = 0.2;
// let totali = 0;

// if (sasiaUjit <= 100) {
//     totali = sasiaUjit * cmimiUjit;
// } else {
//     totali = 100 * cmimiUjit + (sasiaUjit - 100) * 0.4;
// }

// console.log("Totali i fatures eshte: " + totali + "$");



// // 3. Shkuraj nje progam qe merr peshen dhe gjatesin e perdoruesit dhe printon 
// //  nje nga 4 opsionet pasi llogarit BMI:
// // BMI Range	Category
// // Less than 18.5	Underweight
// // 18.5 – 24.9	Normal Weight
// // 25.0 – 29.9	Overweight
// // 30.0 and Above	Obese


// let pesha = prompt("Shkruani peshen tuaj ne kg: ");
// let gjatesia = prompt("Shkruani gjatesine tuaj ne cm: ");
// let gjatesiaM = gjatesia / 100;
// let bmi = pesha / (gjatesiaM * gjatesiaM);

// if (bmi < 18.5) {
//     console.log("Underweight");
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log("Normal Weight");
// } else if (bmi >= 25.0 && bmi <= 29.9) {
//     console.log("Overweight");
// } else {
//     console.log("Obese");
// }   

    function walkForward() {
    console.log('The robot is walking forward.');
    }

    function walkBackward() {
    console.log('The robot is walking backward.');
    }       
    walkForward();
    walkBackward();
    console.log('Goodbye, see you next time!');
    // The robot is walking forward.
    // The robot is walking backward.
    // Goodbye, see you next time!

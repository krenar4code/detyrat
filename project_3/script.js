//write a function that takes the age of the user
// and returns the year he was born

//in  (arguments)
//       age
//cal {body}
//      current_year - age
//out return
//      year_born

// function get_year_of_birth(age) {
//   let current_year = new Date().getFullYear();
//   let year_born = current_year - age;
//   return year_born;
// }

// let age1 = prompt("Vendos moshen e user 1: ");
// let age2 = prompt("Vendos moshen e user 2: ");
// let age3 = prompt("Vendos moshen e user 3: ");

// let year_of_birth_1 = get_year_of_birth(age1);
// let year_of_birth_2 = get_year_of_birth(age2);
// let year_of_birth_3 = get_year_of_birth(age3);

// console.log(year_of_birth_1, year_of_birth_2, year_of_birth_3);

//write a function that gets an array as argument
//and return the avg of the elements

//in  (arguments)
//    array
//cal {body}
//      find avg
//      find sum
//      avg = sum / array.length
//out return
//      avg

// function get_avg(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     sum += element;
//   }
//   return sum / array.length;
// }
// let student_list = [
//   {
//     id: 1,
//     name: "Student 1",
//     scores: [50, 80, 90, 87, 90, 56],
//   },
//   {
//     id: 2,
//     name: "Student 2",
//     scores: [80, 60, 10],
//   },
//   {
//     id: 3,
//     name: "Student 3",
//     scores: [96, 30, 90, 100],
//   },
//   {
//     id: 4,
//     name: "Student 4",
//     scores: [40, 70],
//   },
// ];

// for (let i = 0; i < student_list.length; i++) {
//   const student = student_list[i];
//   let avg = get_avg(student.scores);
//   console.log(`Student ${i + 1} avg is: ${avg}`);
// }

let book_list = [
    {
      id: 1,
      title: "A new story",
      price: 400,
      author: "Author 1",
      pages: 300,
      category: "drame",
      sales: 200,
    },
  ];
  
  //in  (argument)
  //      N/A
  //cal {body}
  //      get data from user using prompt
  //      add to book_list
  //out return
  //      N/A
  
  function add_book(book_list) {
    let title = prompt("Add the book title: ");
    let price = +prompt("Add the book price: ");
    let author = prompt("Add the book author: ");
    let pages = +prompt("Add the book number of pages: ");
    let category = prompt("Add the book category: ");
  
    let new_book = {
      id: Math.floor(Math.random() * 10000000),
      title: title,
      price: price,
      author: author,
      pages: pages,
      category: category,
      sales: 0,
    };
    book_list.push(new_book);
  }
  
  function showMenu() {
    while (true) {
      let userChoice = prompt(
        `Shtyp: 1. per te shtuar nje liber\n 
        2. per te shfaqur te gjitha librat\n
        0. Mbyll programin`
      );
      if (userChoice == 0) {
        break;
      } else if (userChoice == 1) {
        add_book(book_list);
      } else if (userChoice == 2) {
        console.log(book_list);
      }
    }
  }
  
  showMenu();
  
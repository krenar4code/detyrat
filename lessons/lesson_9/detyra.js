let product_list = [
    {
      id: 1,
      img: "img/ent2.jpg",
      name: "Rest1",
      price: 2000,
      stockAmount: 120,
      category: "2",
      material: "1",
    },
    {
      id: 2,
      img: "img/tech2.jpg",
      name: "Bet2",
      price: 4000,
      stockAmount: 12,
      category: "1",
      material: "2",
    },
    {
      id: 3,
      img: "img/tech1.jpg",
      name: "t3",
      price: 1000,
      stockAmount: 70,
      category: "3",
      material: "1",
    },
    {
      id: 4,
      img: "img/tech2.jpg",
      name: "Luggage1",
      price: 5000,
      stockAmount: 35,
      category: "3",
      material: "1",
    },
  ];
  

//   1. Shkruaj nje program qe gjen sum_of_stock_amount per te gjitha produktet

// let sum_of_stock_amount = 0;
// for (let i = 0; i < product_list.length; i++) {
//     sum_of_stock_amount += product_list[i].stockAmount;
// }
// console.log(sum_of_stock_amount);

// 2. Shkruaj nje program qe gjen cmimin mesatar te produkteve, duke mbledhur cmimet e cdo produkti dhe pjestuar me sasine e produkteve

// let sum_of_prices = 0;
// for (let i = 0; i < product_list.length; i++) {
//     sum_of_prices += product_list[i].price;
// }
// let average_price = sum_of_prices / product_list.length;
// console.log(average_price);

// 3. Shkruaj nje program qe printon cmimin e cdo produkti me 20% zbritje

for (let i = 0; i < product_list.length; i++) {
    console.log(product_list[i].price * 0.8);
}

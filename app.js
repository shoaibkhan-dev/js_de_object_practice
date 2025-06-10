// class Product {
//     constructor(name, price, category, discount){
//         this.name = name;
//         this.price = price;
//         this.category = category;
//         this.discount = discount;
//     }
//     getFinalPrice(){
//         let discountAmount = (this.price * this.discount) / 100;
//         return this.price - discountAmount
//     }
//     showDetails() {
//       console.log(`📦 Product: ${this.name}`);
//       console.log(`💰 Original Price: Rs.${this.price}`);
//       console.log(`🏷️ Category: ${this.category}`);
//       console.log(`🔻 Discount: ${this.discount}%`);
//       console.log(`✅ Final Price: Rs.${this.getFinalPrice()}`);
//       console.log("-------------------------");
//     }
//   }
  
  
//   let product1 = new Product("Iphone 16", 420000, "Mobiles", 8);
//   let product2 = new Product("Honda 70", 145000, "Vehicles", 10);
//   let product3 = new Product("Washing Machine", 75000, "Electronics", 15);

//   product1.showDetails()
//   product2.showDetails()
//   product3.showDetails()


//   let user = {
//      name: "shoaib",
//      age : 23,
//      city : "peshawar"
//   }
 
//   console.log(user.name)
//   console.log(user["age"])


// let {name: userName, age : umar, city} = user
// console.log(city)
// console.log(userName)
// console.log(umar)


// let number = [1, 2, 3, 4, 5]

// number.forEach(function(num){
//    console.log(num * 2)
// })


// let numbers = [1, 2, 2, 3, 4, 4, 4, 5, 7, 8, 6, 6, 8, 7];
// // let uniqueNum = [...new Set(numbers)]
// console.log(numbers.has(9))
  


// let users = new Set(["ali", "zara", "bilal", "usman"]);

// console.log(users.has("zara"));
// console.log(users.has("usman"));


let emails = new Set (["abc@gmail.com", "abc@gmail.com", "xyz@gmail.com", "sho@gmail"])
console.log(emails.has("lmn@gmail.com"));
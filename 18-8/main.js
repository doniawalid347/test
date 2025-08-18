// 1. let & const
// باستخدام let
let shoppingCart = ["milk", "bread", "eggs"];
console.log(shoppingCart);

shoppingCart = [...shoppingCart, "DISCOUNT10"]; // إعادة تعيين مع كود خصم
console.log(shoppingCart);

// باستخدام const
const fixedCart = ["milk", "bread", "eggs"];
console.log(fixedCart);

// ❌ Error: مينفعش نعيد تعيين const
// fixedCart = [...fixedCart, "DISCOUNT10"];



// 2. Arrow Functions

const calculateTax = (price) => { 
    return price + (price * 0.15); }; 
console.log(calculateTax(100));
console.log(calculateTax(250)); 
console.log(calculateTax(500));



// 3. Template Literals

function showResult(name, grade) {
  console.log(`Student ${name} has scored ${grade}% in the final exam.`);
}

showResult("Donia", 90);



// 4. Default Parameters

const applyDiscount = (price, discount = 0.1) => {
  return price - (price * discount);
};

console.log(applyDiscount(100));      
console.log(applyDiscount(200, 0.2)); 



// 5. Destructuring

const book = { title: "Book", author: "John Doe", price: 200 };

const { title, price } = book;

console.log(`The book "${title}" costs ${price} EGP.`);




// 6. Spread Operator

const arr1 = ["Math", "English"];
const arr2 = ["Science", "History"];


const subjects = [...arr1, ...arr2, "PE"];


console.log(subjects);



// 7. Rest Parameters
function maxNumber(...nums) {
  return Math.max(...nums);
}

console.log(maxNumber(5, 10, 3, 20, 15)); 



// 8. Enhanced Object Literals
const student = {
  name: "Donia",
  grade: "A",
  introduce() {
    console.log(`Hi, I'm ${this.name} and my grade is ${this.grade}`);
  }
};

student.introduce();




// 9. Classes
class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

const acc = new BankAccount(100);
acc.deposit(50);
acc.withdraw(30);
console.log(acc.balance); 




// 10. Promises
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Donia" });
    }, 1500);
  });
}

fetchUser().then((user) => {
  console.log(`User found: ${user.name}`);
});




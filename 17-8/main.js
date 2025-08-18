// 1. Promise Basics
const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello, World!");
  }, 2000);
});

myPromise.then((message) => {
  console.log("Promise Basics:", message);
});

// 2. Promise Chaining
const numberPromise = Promise.resolve(5);

numberPromise
  .then((num) => num * 2)   // 5 × 2 = 10
  .then((num) => num - 3)   // 10 - 3 = 7
  .then((finalResult) => {
    console.log("Promise Chaining:", finalResult);
  });

// 3. Error Handling
const errorPromise = new Promise((_, reject) => {
  reject("Something went wrong!");
});

errorPromise.catch((err) => {
  console.log("Error Handling:", err);
});

// 4. Fetch API + Promises
fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((data) => {
    console.log("Fetch API + Promises:", data.title);
  });

// 5. Async/Await Basics
async function getProduct() {
  const res = await fetch("https://dummyjson.com/products/1");
  const data = await res.json();
  console.log("Async/Await Basics:", data.title);
}
getProduct();

// 6. Parallel Promises
async function getTwoProducts() {
  const [prod1, prod2] = await Promise.all([
    fetch("https://dummyjson.com/products/1").then((res) => res.json()),
    fetch("https://dummyjson.com/products/2").then((res) => res.json()),
  ]);

  console.log("Parallel Promises:", prod1.title, " & ", prod2.title);
}
getTwoProducts();

async function basicFetch() {
  const output = document.getElementById("basicOutput");
  try {
    const response = await fetch("https://dummyjson.com/products").then(res => res.json());
    const products = response.products;


    products.forEach(product => {
      output.innerHTML += `
        <div class="card">
          <img src="${product.thumbnail}" alt="${product.title} Image">
          <h3>${product.title}</h3>
          <p class="price">$${product.price}</p>
          <p>${product.description}</p>
        </div>
      `;
    });
  } catch (err) {
    console.log(err);
  }
}

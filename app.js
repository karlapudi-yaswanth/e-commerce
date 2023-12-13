document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products");

    // Dummy product data
    const products = [
        { id: 1, name: "Product 1", price: 20.99 },
        { id: 2, name: "Product 2", price: 30.49 },
        { id: 3, name: "Product 3", price: 15.99 },
        { id: 4, name: "Product 4", price: 10.19 },
        { id: 5, name: "Product 5", price: 100.00 },
    
    ]
        
    // Render products
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
});

function addToCart(productId) {
    // Implement cart functionality here
    console.log(`Product ${productId} added to cart`);
}

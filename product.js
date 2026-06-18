```javascript
function renderProducts() {
    return `
        <section class="product-grid">
            ${products.map(product => `
                <div class="card">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
            `).join("")}
        </section>
    `;
}
```

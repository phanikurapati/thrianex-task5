```javascript
function router() {
    const app = document.getElementById("app");

    const route = location.hash || "#/";

    switch(route) {
        case "#/":
            app.innerHTML = `
                <h2>Welcome to ShopHub</h2>
                <p>Modern E-Commerce Product Catalog</p>
            `;
            break;

        case "#/products":
            app.innerHTML = renderProducts();
            break;

        case "#/about":
            app.innerHTML = `
                <h2>About</h2>
                <p>Capstone Project demonstrating modern web development.</p>
            `;
            break;

        default:
            app.innerHTML = "<h2>404 Page Not Found</h2>";
    }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
```

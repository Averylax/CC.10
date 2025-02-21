console.log(`cc_10.js has successfully loaded!`);
// Task 1 - Creating a product class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
    updateStock(quantity) {
        this.stock -= quantity;  
        console.log(`Stock has been updated to ${this.stock}`);  
    }
}
const prod1 = new Product('Laptop', 101, 1200, 10);
console.log(prod1.getDetails());
prod1.updateStock(3);
console.log(prod1.getDetails());
// Task 1 - End

console.log(`----------Task 1 - End----------`)

// Task 2 - Creating a Class Order
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;

        if (this.product.stock > this.quantity) {
            this.product.stock -= this.quantity;
        } else {
            console.log(`Insuffecient Stock for this order`);
        }
    }

    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.quantity * this.product.price}`;
    }
}
// Test
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails());
console.log(prod1.getDetails());
// Task 2 - End

console.log(`----------Task 2 - End----------`)

// Task 3 - Creating Inventory Class
class Inventory {
    constructor() {
        this.products = [];
        this.orders = []; // Task 4
    }

    addProduct(product) {
        this.products.push(product);
    }

    listProducts() {
        this.products.forEach(product => console.log(product.getDetails()));
    }

    placeOrder(orderId, product, quantity) { // Task 4
        if (product.stock >= quantity) {
            const newOrder = new Order(orderId, product, quantity);
            this.orders.push(newOrder);
            console.log(`Order has been placed successfully`);
        } else {
            console.log(`Insuffecient Stock for this order`);
        }
    }

    listOrders() { // Task 4
        this.orders.forEach(order => console.log(order.getOrderDetails()));
    }

    restockProduct(productId, quantity) { // Task 5
        const product = this.products.find(p => p.id === productId);
        if (product) {
            product.stock +=quantity;
            console.log(`Product ID: ${productId} has been restocked to ${product.stock}`);
        } else {
            console.log(`Product not found`);
        }
    }
}

// Test
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
// Task 3 - End

console.log(`----------Task 3 - End----------`)

// Task 4 - Implementing Order Management
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
console.log(prod1.getDetails());
// Task 4 - End

console.log(`----------Task 4 - End----------`)

// Task 5 - Implementing Product Restocking
 inventory.restockProduct(101, 5);
 console.log(prod1.getDetails())
// Task 5 - End

console.log(`----------Task 5 - End----------`)

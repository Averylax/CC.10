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

console.log(`cc_10.js has successfully loaded!`);

// Task 1 - Creating a product class
class Product { // creates a class called Product
    constructor(name, id, price, stock) { // constructor method to initialize the properties of the class using Product Name, ID, Price and Stock quantity
        this.name = name; // initializes the name property
        this.id = id; // initializes the id property
        this.price = price; // initializes the price property
        this.stock = stock; // initializes the stock property
    }

    getDetails() { // method to return the details of the product
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    updateStock(quantity) { // method to update the stock of the product
        this.stock -= quantity; // subtracts the quantity from the stock
        console.log(`Stock has been updated to ${this.stock}`); // logs the updated stock
    }
}
const prod1 = new Product('Laptop', 101, 1200, 10); // New Product called Laptop
console.log(prod1.getDetails()); // logs the details of the product
prod1.updateStock(3); // updates the stock of the product
console.log(prod1.getDetails()); // logs the updated details of the product
// Task 1 - End

console.log(`----------Task 1 - End----------`)

// Task 2 - Creating a Class Order
class Order { // creates a class called Order for the customers order
    constructor(orderId, product, quantity) { // constructor method to initialize the properties of the class using Order ID, Product and Quantity
        this.orderId = orderId; // initializes the orderId property
        this.product = product; // initializes the product property
        this.quantity = quantity; // initializes the quantity property

        if (this.product.stock > this.quantity) { // checks if the stock is greater than the quantity
            this.product.stock -= this.quantity; // subtracts the quantity from the stock
        } else {
            console.log(`Insuffecient Stock for this order`); // logs if the stock is insufficient
        }
    }

    getOrderDetails() { // method to return the details of the order
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.quantity * this.product.price}`;
    }
}
// Test
const order1 = new Order(501, prod1, 2); // New Order called order1
console.log(order1.getOrderDetails()); // logs the details of the order
console.log(prod1.getDetails()); // logs the updated details of the product
// Task 2 - End

console.log(`----------Task 2 - End----------`)

// Task 3 - Creating Inventory Class
class Inventory { // creates a class called Inventory
    constructor() { // constructor method to initialize the properties of the class
        this.products = []; // initializes the products property
        this.orders = []; // Task 4 - initializes the orders property
    }

    addProduct(product) { // method to add a product to the inventory
        this.products.push(product); // adds the product to the products array
    }

    listProducts() { // method to list all the products in the inventory
        this.products.forEach(product => console.log(product.getDetails())); // loops through products array and logs the details of each product
    }

    placeOrder(orderId, product, quantity) { // Task 4 - method to place an order
        if (product.stock >= quantity) { // checks if the stock is greater than or equal to the quantity
            const newOrder = new Order(orderId, product, quantity); // creates a new order
            this.orders.push(newOrder); // adds the order to the orders array
            console.log(`Order has been placed successfully`); // logs that the order has been placed successfully
        } else {
            console.log(`Insuffecient Stock for this order`); // logs if the stock is insufficient
        }
    }

    listOrders() { // Task 4 - method to list all the orders
        this.orders.forEach(order => console.log(order.getOrderDetails()));
    }

    restockProduct(productId, quantity) { // Task 5 - method to restock a product
        const product = this.products.find(p => p.id === productId); // finds the product by productId
        if (product) {
            product.stock +=quantity; // adds the quantity to the stock
            console.log(`Product ID: ${productId} has been restocked to ${product.stock}`); // logs that the product has been restocked
        } else {
            console.log(`Product not found`); // logs if the product is not found
        }
    }
}

// Test
const inventory = new Inventory(); // New Inventory called inventory
inventory.addProduct(prod1);  // adds the product to the inventory
inventory.listProducts(); // lists the products in the inventory
// Task 3 - End

console.log(`----------Task 3 - End----------`)

// Task 4 - Implementing Order Management
inventory.placeOrder(601, prod1, 2); // places an order
inventory.listOrders(); // lists the orders
console.log(prod1.getDetails()); // logs the updated details of the product
// Task 4 - End

console.log(`----------Task 4 - End----------`)

// Task 5 - Implementing Product Restocking
 inventory.restockProduct(101, 5); // restocks the product
 console.log(prod1.getDetails()) // logs the updated details of the product
// Task 5 - End

console.log(`----------Task 5 - End----------`)

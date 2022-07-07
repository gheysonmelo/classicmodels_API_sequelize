const express = require('express');
const bodyParser = require('body-parser')

// const service = require("./src/api/employees/EmployeesService")

const customers = require('./src/api/customers/CustomersController');
const employees = require('./src/api/employees/EmployeesController');
const offices = require('./src/api/offices/OfficesController');
const orderdetails = require('./src/api/orderdetails/OrderdetailsController');
const orders = require('./src/api/orders/OrdersController');
const payments = require('./src/api/payments/PaymentsController');
const productlines = require('./src/api/productlines/ProductlinesController');
const products = require('./src/api/products/ProductsController');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/customers', customers);
app.use('/employees', employees);
app.use('/offices', offices);
app.use('/orderdetails', orderdetails);
app.use('/orders', orders);
app.use('/payments', payments);
app.use('/productlines', productlines);
app.use('/products', products);

app.get('/', (req, res) => {
    res.send(service.getAll());
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

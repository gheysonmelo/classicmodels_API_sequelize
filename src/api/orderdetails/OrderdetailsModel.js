const Sequelize = require("sequelize");
const sequelize = require('../../database/sequelize');

const OrderDetail = sequelize.define("orderdetails", {
    orderNumber: { type: Sequelize.INTEGER },
    productCode: { type: Sequelize.STRING },
    quantityOrdered: { type: Sequelize.STRING },
    priceEach: { type: Sequelize.STRING },
    orderLineNumber: { type: Sequelize.STRING },
});

module.exports = OrderDetail;
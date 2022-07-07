const Sequelize = require("sequelize");
const sequelize = require('../../database/sequelize');

const Order = sequelize.define("orders", {
    orderNumber: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, },
    orderDate: { type: Sequelize.STRING },
    requiredDate: { type: Sequelize.STRING },
    shippedDate: { type: Sequelize.STRING },
    status: { type: Sequelize.STRING },
    comments: { type: Sequelize.STRING },
    customerNumber: { type: Sequelize.STRING },
});

module.exports = Order;
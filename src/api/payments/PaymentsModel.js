const Sequelize = require("sequelize");
const sequelize = require('../../database/sequelize');

const Payment = sequelize.define("payments", {
    checkNumber: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, },
    customerNumber: { type: Sequelize.STRING },
    paymentDate: { type: Sequelize.STRING },
    amount: { type: Sequelize.STRING },
});

module.exports = Payment;
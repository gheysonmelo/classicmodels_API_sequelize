const Sequelize = require("sequelize");
const sequelize = require('../../database/sequelize');

const Employee = sequelize.define("customers", {
    customerNumber: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, },
    customerName: { type: Sequelize.STRING },
    contactLastName: { type: Sequelize.STRING },
    contactFirstName: { type: Sequelize.STRING },
    phone: { type: Sequelize.STRING },
    addressLine1: { type: Sequelize.STRING },
    addressLine2: { type: Sequelize.STRING },
    city: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING },
    postalCode: { type: Sequelize.STRING },
    country: { type: Sequelize.STRING },
    salesRepEmployeeNumber: { type: Sequelize.STRING },
    creditLimit: { type: Sequelize.STRING },
});

module.exports = Employee;
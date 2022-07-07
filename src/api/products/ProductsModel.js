const Sequelize = require("sequelize");
const sequelize = require('../../database/sequelize');

const Product = sequelize.define("products", {
    productCode: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, },
    productName: { type: Sequelize.STRING },
    productLine: { type: Sequelize.STRING },
    productScale: { type: Sequelize.STRING },
    productVendor: { type: Sequelize.STRING },
    productDescription: { type: Sequelize.STRING },
    quantityInStock: { type: Sequelize.STRING },
    buyPrice: { type: Sequelize.STRING },
    MSRP: { type: Sequelize.STRING },
});

module.exports = Product;
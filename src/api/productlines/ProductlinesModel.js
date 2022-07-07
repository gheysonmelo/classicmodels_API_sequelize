const Sequelize = require("sequelize");
const sequelize = require('../../database/sequelize');

const ProductLine = sequelize.define("productlines", {
    productLine: { type: Sequelize.INTEGER, primaryKey: true, },
    textDescription: { type: Sequelize.STRING },
    htmlDescription: { type: Sequelize.STRING },
    image: { type: Sequelize.STRING },
});

module.exports = ProductLine;
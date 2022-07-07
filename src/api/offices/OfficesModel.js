const Sequelize = require("sequelize");
const sequelize = require('../../database/sequelize');

const Office = sequelize.define("offices", {
    officeCode: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, },
    city: { type: Sequelize.STRING },
    phone: { type: Sequelize.STRING },
    addressLine1: { type: Sequelize.STRING },
    addressLine2: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING },
    country: { type: Sequelize.STRING },
    postalCode: { type: Sequelize.STRING },
    territory: { type: Sequelize.STRING },
});

module.exports = Office;
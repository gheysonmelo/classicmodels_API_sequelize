const model = require("./CustomersModel");

exports.getAll = function () {
    return model.findAll();
};

exports.getById = function (id) {
    return model.findByPk(id);
};

exports.create = function (obj) {
    return model.create(obj);
};

exports.update = function (id, obj) {
    return model.update(obj, {
        where: {
            customerNumber: id
        }
    });
};

exports.delete = function (id) {
    return model.destroy({
        where: {
            customerNumber: id
        }
    });
};
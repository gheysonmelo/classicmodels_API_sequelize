const model = require("./OrderdetailsModel");

exports.getAll = function () {
    return model.findAll();
};

// exports.getById = function (id) {
//     return model.findByPk(id);
// };

// exports.create = function (obj) {
//     return model.create(obj);
// };

// exports.update = function (id, obj) {
//     return model.update(obj, {
//         where: {
//             employeeNumber: id                        //TABELA DE LIGAÇÃO QUE NÃO TEM ID
//         }
//     });
// };

// exports.delete = function (id) {
//     return model.destroy({
//         where: {
//             employeeNumber: id                     //TABELA DE LIGAÇÃO QUE NÃO TEM ID
//         }
//     });
// };
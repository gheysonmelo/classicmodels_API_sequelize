const express = require('express');

const service = require("./EmployeesService");

const router = express.Router();

router.get("/", (req, res) => {
    service.getAll().then((employees) => {
        res.send(employees);
    })
});

router.get("/:id", (req, res) => {
    service.getById(req.params.id).then((employee) => {
        res.send(employee);
    })
});

router.post('/', (req, res) => {
    service.create(req.body);
    res.send('Funcionário foi criado');
});

router.put("/:id", (req, res) => {
    service.update(req.params.id, req.body);
    res.send('Estou alterando um funcionário!');
});

router.delete("/:id", (req, res) => {
    service.delete(req.params.id);
    res.send('Estou excluindo um funcionário!');
});

module.exports = router;
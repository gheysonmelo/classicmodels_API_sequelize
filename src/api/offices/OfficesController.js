const express = require('express');

const service = require("./OfficesService");

const router = express.Router();

router.get("/", (req, res) => {
    service.getAll().then((offices) => {
        res.send(offices);
    })
});

router.get("/:id", (req, res) => {
    service.getById(req.params.id).then((office) => {
        res.send(office);
    })
});

router.post('/', (req, res) => {
    service.create(req.body);
    res.send('Escritório foi criado');
});

router.put("/:id", (req, res) => {
    service.update(req.params.id, req.body);
    res.send('Estou alterando um escritório!');
});

router.delete("/:id", (req, res) => {
    service.delete(req.params.id);
    res.send('Estou excluindo um escritório!');
});

module.exports = router;
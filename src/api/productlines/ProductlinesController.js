const express = require('express');

const service = require("./ProductlinesService");

const router = express.Router();

router.get("/", (req, res) => {
    service.getAll().then((productlines) => {
        res.send(productlines);
    })
});

router.get("/:id", (req, res) => {
    service.getById(req.params.id).then((productline) => {
        res.send(productline);
    })
});

router.post('/', (req, res) => {
    service.create(req.body);
    res.send('Linha de produto foi criada');
});

router.put("/:id", (req, res) => {
    service.update(req.params.id, req.body);
    res.send('Estou alterando uma linha de produto!');
});

router.delete("/:id", (req, res) => {
    service.delete(req.params.id);
    res.send('Estou excluindo uma linha de produto!');
});

module.exports = router;
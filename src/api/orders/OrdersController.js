const express = require('express');

const service = require("./OrdersService");

const router = express.Router();

router.get("/", (req, res) => {
    service.getAll().then((orders) => {
        res.send(orders);
    })
});

router.get("/:id", (req, res) => {
    service.getById(req.params.id).then((order) => {
        res.send(order);
    })
});

router.post('/', (req, res) => {
    service.create(req.body);
    res.send('Pedido foi criado');
});

router.put("/:id", (req, res) => {
    service.update(req.params.id, req.body);
    res.send('Estou alterando um pedido!');
});

router.delete("/:id", (req, res) => {
    service.delete(req.params.id);
    res.send('Estou excluindo um pedido!');
});

module.exports = router;
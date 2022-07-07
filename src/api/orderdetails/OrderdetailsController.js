const express = require('express');

const service = require("./OrderdetailsService");

const router = express.Router();

router.get("/", (req, res) => {
    service.getAll().then((orderdetails) => {
        res.send(orderdetails);
    })
});

// router.get("/:id", (req, res) => {
//     service.getById(req.params.id).then((orderdetail) => {
//         res.send(orderdetail);
//     })
// });

// router.post('/', (req, res) => {
//     service.create(req.body);
//     res.send('Detalhe de pedido foi criado');
// });

// router.put("/:id", (req, res) => {
//     service.update(req.params.id, req.body);
//     res.send('Estou alterando um detalhe de pedido!');
// });

// router.delete("/:id", (req, res) => {
//     service.delete(req.params.id);
//     res.send('Estou excluindo um detalhe de pedido!');
// });

module.exports = router;
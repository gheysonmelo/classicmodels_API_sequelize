const express = require('express');

const service = require("./PaymentsService");

const router = express.Router();

router.get("/", (req, res) => {
    service.getAll().then((payments) => {
        res.send(payments);
    })
});

router.get("/:id", (req, res) => {
    service.getById(req.params.id).then((payment) => {
        res.send(payment);
    })
});

router.post('/', (req, res) => {
    service.create(req.body);
    res.send('Pagamento foi criado');
});

router.put("/:id", (req, res) => {
    service.update(req.params.id, req.body);
    res.send('Estou alterando um pagamento!');
});

router.delete("/:id", (req, res) => {
    service.delete(req.params.id);
    res.send('Estou excluindo um pagamento!');
});

module.exports = router;
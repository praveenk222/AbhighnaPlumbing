const express = require('express');
const router = express.Router();
const Joi = require('joi');

const validateRequest = require('../../_middleware/validate-request');
const orderService = require('./order.service');

// routes

router.get('/', orderService.getAllUser);
router.get('/:ID', orderService.getById);
router.post('/', orderService.createorder);

module.exports = router;

// route functions

// function getAll(req, res, next) {
//     orderService.getAllUser()
//         .then(x => res.json(x))
//         .catch(next);
// }

// function getById(req, res, next) {
//     orderService.getById(req.params.id)
//         .then(user => res.json(user))
//         .catch(next);
// }

// function create(req, res, next) {
//     orderService.createorder(req.body)
//         .then(() => res.json({ message: 'User created' }))
//         .catch(next);
// }



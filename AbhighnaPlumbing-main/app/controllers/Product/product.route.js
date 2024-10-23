const express = require('express');
const router = express.Router();
const Joi = require('joi');

const validateRequest = require('../../_middleware/validate-request');
const productService = require('./product.service');

// routes

router.get('/', productService.getAllUser);
router.get('/:ID', productService.getById);
router.post('/', productService.createProduct);

module.exports = router;

// route functions

// function getAll(req, res, next) {
//     productService.getAllUser()
//         .then(x => res.json(x))
//         .catch(next);
// }

// function getById(req, res, next) {
//     productService.getById(req.params.id)
//         .then(user => res.json(user))
//         .catch(next);
// }

// function create(req, res, next) {
//     productService.createProduct(req.body)
//         .then(() => res.json({ message: 'User created' }))
//         .catch(next);
// }



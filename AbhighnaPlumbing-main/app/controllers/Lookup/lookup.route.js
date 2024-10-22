const express = require('express');
const router = express.Router();
const Joi = require('joi');

const validateRequest = require('../../_middleware/validate-request');
const productService = require('./lookup.service');

// routes

router.get('/', productService.getAllItems);
router.get('/:LookupID', productService.getById);
router.post('/', productService.createItem);

module.exports = router;



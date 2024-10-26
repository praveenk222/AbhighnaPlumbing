const express = require('express');
const router = express.Router();
const Joi = require('joi');

const validateRequest = require('../../_middleware/validate-request');
const productService = require('./inventory.service');

// routes

router.get('/', productService.getAllItems);

module.exports = router;



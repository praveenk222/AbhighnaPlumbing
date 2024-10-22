const express = require('express');
const router = express.Router();
const Joi = require('joi');

const validateRequest = require('../../_middleware/validate-request');
const lookupMesurmentervice = require('./mesurmentLookup.service');

// routes

router.get('/', lookupMesurmentervice.getAllItems);
router.get('/:LookupID', lookupMesurmentervice.getById);
router.post('/', lookupMesurmentervice.createItem);

module.exports = router;



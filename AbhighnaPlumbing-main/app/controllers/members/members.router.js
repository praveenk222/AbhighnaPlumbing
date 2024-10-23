const express = require('express');
const router = express.Router();
const Joi = require('joi');

const validateRequest = require('../../_middleware/validate-request');
const memberService = require('./members.service');

// routes

router.get('/', memberService.getAllUser);
router.post('/login', memberService.Login);
router.get('/getUserPermissions/:UserID', memberService.getUserPermissions);
// router.get('/:id', getById);

module.exports = router;

// route functions



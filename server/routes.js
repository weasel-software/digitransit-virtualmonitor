//const express = require('express');
import express from 'express';
import { getTranslations, getTranslations3 } from 'gtfs';
const router = express.Router();

import monitorService from './monitorService.js';
//const monitorService = require('./monitorService');

router.get('/monitors', (req, res) => {
  monitorService.getAll(req, res);
});

router.get('/monitor/:id', (req, res) => {
  monitorService.get(req, res);
});

router.get('/usermonitors/:id',(req, res) => {
  monitorService.getMonitorsForUser(req, res);
});

router.put('/monitor', (req, res) => {
  monitorService.create(req, res);
});

router.get('/translations/:recordIds', (req, res) => {
  const ids = req.params.recordIds.split(',');
  getTranslations({trans_id: ids}).then(t => {
    res.json(t);
  })
});

//module.exports = router;
export default router;

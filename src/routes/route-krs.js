const router = require('express').Router();
const {krs} = require('../controllers');

// Get data
router.get('/krs', krs.getDataKrs);

// Get data by id
router.get('/krs/:id', krs.getDataKrsById);

// Store data
router.post('/krs/add', krs.addDataKrs);

// Update data
router.post('/krs/edit', krs.editDataKrs);

// Delete data
router.post('/krs/delete/', krs.deleteDataKrs);

module.exports = router;

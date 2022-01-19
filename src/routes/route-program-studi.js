const router = require('express').Router();
const {programstudi} = require('../controllers');

// Get data
router.get('/programstudi', programstudi.getDataProgramstudi);

// Get data by id
router.get('/programstudi/:id', programstudi.getDataProgramstudiById);

// Store data
router.post('/programstudi/add', programstudi.addDataProgramstudi);

// Update data
router.post('/programstudi/edit', programstudi.editDataProgramstudi);

// Delete data
router.post('/programstudi/delete/', programstudi.deleteDataProgramstudi);

module.exports = router;

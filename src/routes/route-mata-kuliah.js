const router = require('express').Router();
const {matakuliah} = require('../controllers');

// Get data
router.get('/matakuliah', matakuliah.getDataMatakuliah);

// Get data by id
router.get('/matakuliah/:id', matakuliah.getDataMatakuliahById);

// Store data
router.post('/matakuliah/add', matakuliah.addDataMatakuliah);

// Update data
router.post('/matakuliah/edit', matakuliah.editDataMatakuliah);

// Delete data
router.post('/matakuliah/delete/', matakuliah.deleteDataMatakuliah);

module.exports = router;

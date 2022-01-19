const router = require('express').Router();
const {mahasiswa} = require('../controllers');

// Get data
router.get('/mahasiswa', mahasiswa.getDataMahasiswa);

// Get data by id
router.get('/mahasiswa/:id', mahasiswa.getDataMahasiswaById);

// Store data
router.post('/mahasiswa/add', mahasiswa.addDataMahasiswa);

// Update data
router.post('/mahasiswa/edit', mahasiswa.editDataMahasiswa);

// Delete data
router.post('/mahasiswa/delete/', mahasiswa.deleteDataMahasiswa);

module.exports = router;

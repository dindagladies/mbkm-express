const router = require('express').Router();
const {krs, mahasiswa, programstudi, matakuliah} = require('./src/controllers');

/*
* Krs
*/
router.get('/krs', krs.getDataKrs);
router.get('/krs/:id', krs.getDataKrsById);
router.post('/krs/add', krs.addDataKrs);
router.post('/krs/edit', krs.editDataKrs);
router.post('/krs/delete/', krs.deleteDataKrs);

/*
* Mahasiswa
*/
router.get('/mahasiswa', mahasiswa.getDataMahasiswa);
router.get('/mahasiswa/:id', mahasiswa.getDataMahasiswaById);
router.post('/mahasiswa/add', mahasiswa.addDataMahasiswa);
router.post('/mahasiswa/edit', mahasiswa.editDataMahasiswa);
router.post('/mahasiswa/delete/', mahasiswa.deleteDataMahasiswa);

/*
* Program studi
*/
router.get('/programstudi', programstudi.getDataProgramstudi);
router.get('/programstudi/:id', programstudi.getDataProgramstudiById);
router.post('/programstudi/add', programstudi.addDataProgramstudi);
router.post('/programstudi/edit', programstudi.editDataProgramstudi);
router.post('/programstudi/delete/', programstudi.deleteDataProgramstudi);

/*
* Mata kuliah
*/
router.get('/matakuliah', matakuliah.getDataMatakuliah);
router.get('/matakuliah/:id', matakuliah.getDataMatakuliahById);
router.post('/matakuliah/add', matakuliah.addDataMatakuliah);
router.post('/matakuliah/edit', matakuliah.editDataMatakuliah);
router.post('/matakuliah/delete/', matakuliah.deleteDataMatakuliah);

module.exports = router;

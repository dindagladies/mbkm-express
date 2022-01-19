const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    // Get data
    getDataMahasiswa(req, res){
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM mahasiswa;
                `
                , function(error, results){
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Get data',
                        data: results
                    });
                }
            );
            connection.release();
        })
    },

    // Get data by id
    getDataMahasiswaById(req, res){
        let id = req.params.id;
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM mahasiswa WHERE id = ?;
                `
                , [id],
                function (error, results){
                    if (error) throw error;
                    res.send({
                        success:true,
                        message: 'Get data by id',
                        data: results
                    });
                }
            );
            connection.release();
        })
    },

    // Store data
    addDataMahasiswa(req, res){
        let data = {
            nama : req.body.nama,
            nim : req.body.nim,
            tanggal_lahir : req.body.tanggal_lahir,
            tahun_masuk : req.body.tahun_masuk,
            kode_program_studi : req.body.kode_program_studi
        }
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                INSERT INTO mahasiswa SET ?;
                `
            ), [data],
            function (error, results){
                if(error, results){
                    res.send({
                        success: true,
                        message: 'Data saved !'
                    });
                }
            };
            connection.release();
        })
    },

    // Update data
    editDataMahasiswa(req, res){
        let dataEdit = {
            nama : req.body.nama,
            nim : req.body.nim,
            tanggal_lahir : req.body.tanggal_lahir,
            tahun_masuk : req.body.tahun_masuk,
            kode_program_studi : req.body.kode_program_studi
        }
        let id = req.body.id;
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                UPDATE mahasiswa SET ? WHERE id = ?;
                `
                , [dataEdit, id],
                function (error, results){
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data updated !',
                    });
                }
            );
            connection.release();
        })
    },


    // Delete data
    deleteDataMahasiswa(req, res){
        let id = req.body.id
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                DELETE FROM mahasiswa WHERE id  = ?;
                `
                , [id],
                function (error, results){
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data deleted !'
                    });
                }
            );
            connection.release();
        })
    }
}
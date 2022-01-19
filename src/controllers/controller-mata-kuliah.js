const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    // Get data
    getDataMatakuliah(req, res){
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM mata_kuliah;
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

    // Get data by kode
    getDataMatakuliahById(req, res){
        let kode = req.params.kode;
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM mata_kuliah WHERE kode = ?;
                `
                , [kode],
                function (error, results){
                    if (error) throw error;
                    res.send({
                        success:true,
                        message: 'Get data by kode',
                        data: results
                    });
                }
            );
            connection.release();
        })
    },

    // Store data
    addDataMatakuliah(req, res){
        let data = {
            kode : req.body.kode,
            nama : req.body.nama,
            sks : req.body.sks,
            kode_program_studi : req.body.kode_program_studi
        }
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                INSERT INTO mata_kuliah SET ?;
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
    editDataMatakuliah(req, res){
        let dataEdit = {
            kode : req.body.kode,
            nama : req.body.nama,
            sks : req.body.sks,
            kode_program_studi : req.body.kode_program_studi
        }
        let kode = req.body.kode;
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                UPDATE mata_kuliah SET ? WHERE kode = ?;
                `
                , [dataEdit, kode],
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
    deleteDataMatakuliah(req, res){
        let kode = req.body.kode
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                DELETE FROM mata_kuliah WHERE kode  = ?;
                `
                , [kode],
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
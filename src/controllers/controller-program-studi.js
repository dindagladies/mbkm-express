const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    // Get data
    getDataProgramstudi(req, res){
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM program_studi;
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
    getDataProgramstudiById(req, res){
        let kode = req.params.kode;
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM program_studi WHERE kode = ?;
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
    addDataProgramstudi(req, res){
        let data = {
            kode : req.body.kode,
            nama : req.body.nama,
        }
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                INSERT INTO program_studi SET ?;
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
    editDataProgramstudi(req, res){
        let dataEdit = {
            kode : req.body.kode,
            nama : req.body.nama,
        }
        let kode = req.body.kode;
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                UPDATE program_studi SET ? WHERE kode = ?;
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
    deleteDataProgramstudi(req, res){
        let kode = req.body.kode
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                DELETE FROM program_studi WHERE kode  = ?;
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
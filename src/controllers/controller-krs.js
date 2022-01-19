const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    // Get data
    getDataKrs(req, res){
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM krs;
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
    getDataKrsById(req, res){
        let id = req.params.id;
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM krs WHERE id = ?;
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
    addDataKrs(req, res){
        let data = {
            nim : req.body.nim,
            kode_mata_kuliah : req.body.kode_mata_kuliah,
        }
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                INSERT INTO krs SET ?;
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
    editDataKrs(req, res){
        let dataEdit = {
            nim : req.body.nim,
            kode_mata_kuliah : req.body.kode_mata_kuliah,
        }
        let id = req.body.id;
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                UPDATE krs SET ? WHERE id = ?;
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
    deleteDataKrs(req, res){
        let id = req.body.id
        pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                DELETE FROM krs WHERE id  = ?;
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
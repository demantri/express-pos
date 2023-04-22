const express = require('express');
const router = express.Router();

const connection = require('../config/database');
const { body, validationResult } = require('express-validator');

router.get('/', function(req, res) {
    connection.query("select * from barang where status = '1' order by id asc", function(err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal server error'
            });
        } else {
            return res.status(200).json({
                status: true,
                message: 'Get list barang sukses',
                data: rows
            });
        }
    });
});

router.post('/store', [
    // add validation here 
    body('kode_barang').notEmpty().withMessage('Kode barang harus diisi'),
    body('barcode_id').notEmpty().withMessage('Barcode ID harus diisi'),
    body('nama_barang').notEmpty().withMessage('Nama barang harus diisi'),
    body('stok').notEmpty().withMessage('Stok harus diisi'),
    body('harga_beli').notEmpty().withMessage('Harga beli harus diisi'),
    body('harga_jual').notEmpty().withMessage('Harga jual harus diisi'),
    body('kategori').notEmpty().withMessage('Kategori harus diisi'),

], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    let formData = {
        kode_barang : req.body.kode_barang,
        barcode_id : req.body.barcode_id,
        nama_barang : req.body.nama_barang,
        stok : req.body.stok,
        harga_beli : req.body.harga_beli,
        harga_jual : req.body.harga_jual,
        kategori : req.body.kategori,
    }

    // store data
    connection.query("INSERT INTO barang SET ?", formData, function(err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'Barang berhasil di tambahkan.',
                data: rows[0]
            });
        }
    })
});

router.get('/(:id)', function(req, res) {

    let id =  req.params.id
    
    connection.query(`select * from barang where id = ${id}`, function(err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error'
            })
        }

        if (rows.length <= 0) {
            return res.status(400).json({
                status: false,
                message: 'Data Not Found!',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: `Detail barang ${id} berhasil ditemukan.`,
                data: rows[0]
            })
        }
    })
});

router.patch('/update/(:id)', [
    // tambah validasi
    // body('kode_barang').notEmpty().withMessage('Kode barang harus diisi'),
    // body('barcode_id').notEmpty().withMessage('Barcode ID harus diisi'),
    body('nama_barang').notEmpty().withMessage('Nama barang harus diisi'),
    body('stok').notEmpty().withMessage('Stok harus diisi'),
    body('harga_beli').notEmpty().withMessage('Harga beli harus diisi'),
    body('harga_jual').notEmpty().withMessage('Harga jual harus diisi'),
    body('kategori').notEmpty().withMessage('Kategori harus diisi'),

], (req, res) => {
    const error = validationResult(req)

    if (!error.isEmpty()) {
        return res.status(422).json({
            errors: error.array()
        })
    }

    let id = req.params.id

    let formData = {
        // kode_barang : req.body.kode_barang,
        // barcode_id : req.body.barcode_id,
        nama_barang : req.body.nama_barang,
        stok : req.body.stok,
        harga_beli : req.body.harga_beli,
        harga_jual : req.body.harga_jual,
        kategori : req.body.kategori,
    }

    connection.query(`update barang set ? where id = ${id}`, formData, function(err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(201).json({
                status: true,
                message: 'Data barang berhasil di update',
                data: rows[0]
            })
        }
    })
});

router.delete('/delete/(:id)', function(req, res) {

    let id = req.params.id;
     
    connection.query(`delete from barang where id = ${id}`, function(err, rows) {
        //if(err) throw err
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: `Barang ID ${id} Berhasil Dihapus!`,
            })
        }
    })
});


module.exports = router;
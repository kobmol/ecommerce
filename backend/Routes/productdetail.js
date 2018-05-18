const router = require('express').Router();
const con = require('../App/sql');

router.post('/create/:id?', function(req, res){
    con.query("SELECT id from product where ?", {
        id : req.params.id
    },
    function(err,rows) {
        con.query("insert into product_detail set ?", {
                id_Produk : rows[0].id,
                description : req.body.produkDescription,
                Price : req.body.produkPrice
        },function(err) {
            if (err) {
                res.json({ status: 'gagal'})
            } else {
                res.json({ status: 'berhasil', data: req.body})
            }
        });
        // res.json(req.body)
    })
})

router.get('/read', function(req, res){
    con.query("select * from product_detail", function(err,produkDetail,field){
        res.json(produkDetail)
    })
})

router.get('/read/:id', function(req, res){
    con.query("select * from product_detail where id = ?", [req.params.id],(err,rows,fields) => {
        // res.json(product)
        if(!err)
        res.send(rows);
        else
        console.log(err)
    })
})

module.exports = router
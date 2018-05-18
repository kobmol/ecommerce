const router = require('express').Router();
const con = require('../App/sql');

router.post('/create/:id?', function(req, res){
    con.query("SELECT * from provence where ?", {
        id : req.params.id
    },
    function(err,rows) {
        con.query("insert into product set ?", {
                id_Provence : rows[0].id,
                Produk : req.body.Produk,
                url : req.body.url
        },function(err) {
            if (err) {
                res.json({ status: 'gagal'})
            } else {
                res.json({ status: 'berhasil', data: req.body})
            }
        });
    })
})

router.get('/read', function(req, res){
    con.query("select * from product", function(err,Produk,field){
        res.json(Produk)
    })
})

router.get('/read/:id', function(req, res){
    con.query("select * from product where id = ?", [req.params.id],(err,rows,fields) => {
        // res.json(product)
        if(!err)
        res.send(rows);
        else
        console.log(err)
    })
})

module.exports = router;

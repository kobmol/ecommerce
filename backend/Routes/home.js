const router = require('express').Router();
const con = require('../App/sql');


router.get('/:id?', function(req, res){
    let sql = '';
    if (req.params.id === undefined) sql = 'select * from product_detail'
    else sql = 'select * from product_detail where ?'
    con.query(sql, {
        id_Produk : req.params.id,
    }, function(err,rows) {
        res.json(rows) 
    });
})


module.exports = router;

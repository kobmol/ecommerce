const router = require('express').Router();
const con = require('../App/sql');

// USER CREATE EDIT____________________________________________

router.post('/', function(req, res){
    con.query("SELECT * FROM product_detail where ?", {
        id : req.body.product_detail
    }, function(err,rows) {
        con.query("INSERT into cart set ?", {
            user_id : req.session.userdata.userid,
            Id_productDetail : rows[0].id,
            description : rows[0].description,
            price : rows[0].Price,
            quantity : req.body.quantity
        })
        res.json(req.body)
    })
})

// USER READ EDIT____________________________________________

router.get('/', function(req, res){
    con.query('SELECT * FROM cart where ?',{
        user_id : req.session.userdata.userid
    }, function(err,cart) {
        res.json(cart)
    })
})

// USER CART EDIT____________________________________________

router.post('/update/:id?', function(req, res){
con.query("update cart set ? where ?",
    [
        { jumlahorang : req.body.jumlahorang },
        { id : req.params.id }
    ]);
    res.json(req.body)
})

// USER CART DELETE____________________________________________

router.get('/delete/:id?', function(req, res){
    con.query("delete from cart where ?",
    {
        id: req.params.id
    });
    res.json('deleted')
})  

module.exports = router;

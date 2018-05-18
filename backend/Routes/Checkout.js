const router = require('express').Router();
const con = require('../App/sql');


router.post('/', function(req, res){
    var kode_invoice = "Tenun " + req.session.userdata.userid + '.' + (new Date)

        con.query("SELECT * FROM cart where ?", {
            user_id : req.session.userdata.userid,
        },
        function(err,cart) {
            con.query("INSERT into invoice set ?", {
                user_id : req.session.userdata.userid,
                invoice_code : kode_invoice,
                price_total : cart[0].price * cart[0].quantity ,     
                buyer_name : req.body.nama_pemesan,
                buyer_mobile : req.body.hp_pemesan,
                shipping_address : req.body.alamat_pengiriman,
                date : new Date
            })
            
            cart.forEach(x => {
                con.query("INSERT into invoice_detail set ?", {
                    invoice_code_id : kode_invoice,
                    product_detail : x.description,
                    price : x.price,
                    quantity : x.quantity,
                })
            })    

            con.query("DELETE FROM cart where ?", {
                user_id : req.session.userdata.userid
            })
            res.json(req.body)
        }) 
})

router.get('/:id?', function(req, res){
    con.query("SELECT * FROM invoice_detail where ?", {
        invoice_code_id : req.params.id
    },
    function(err,invoice_detail) {
        res.json(invoice_detail)
    })
})


module.exports = router;

const router = require('express').Router();
const con = require('../App/sql');

router.get('/', function(req, res){
    con.query("SELECT * FROM invoice where ?", {
        user_id : req.session.userdata.userid
    },
    function(err,rows) {
        res.json(rows)
    })
})


module.exports = router;

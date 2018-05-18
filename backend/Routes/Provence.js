const router = require('express').Router();
const con = require('../App/sql');

router.post('/create', function(req, res){
    con.query("insert into provence set ? ", {
        Provence_Names : req.body.provence_names
    }, function(err) {
        if (err) {
            res.json({ status: 'gagal'})
        } else {
            res.json({ status: 'berhasil', data: req.body})
        }
    })
})

router.get('/read', function(req, res){
    con.query("select * from provence", function(err,Provence_Names,field){
        res.json(Provence_Names)
    })
})

router.get('/read/:id', function(req, res){
    con.query("select * from provence where id = ?", [req.params.id],(err,rows,fields) => {
        // res.json(Provence_Names)
        if(!err)
        res.send(rows);
        else
        console.log(err)
    })
})




// router.post('/update/:id?', function(req, res){
//     con.query("update kategori set ? where ?",
//     [
//         { pr : req.body.kategori },
//         { id : req.params.id, }
//     ]);
//     res.json(req.body)
// })

// router.get('/delete/:id?', function(req, res){
//     con.query("delete from kategori where ?", {
//         id: req.params.id
//     });
//     res.json('deleted')
// })


module.exports = router;
const router = require ('express').Router();
const con = require ('../app/sql');

router.get('/',function(req,res){
    req.session.destroy(function(err){
        if(err){
            console.log(err);
        }
        else{
            res.send('logout')
        }
    })
})

module.exports = router
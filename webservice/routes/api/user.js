var express = require('express');
const router = express.Router();
var User = require('../../Class/user');
var nodemailer = require('nodemailer');
let newUser = new User();
  

router.post("/login", (req, res)=>{
    newUser.getUserDetailbyEmail(req.body).subscribe(
        (result)=>{res.status(200).send(result);},
        (error)=>{errorLog(error, res)},
        ()=>{console.log('(complete)')}
    );
});
router.post("/signup", (req, res)=>{
    newUser.createUserDetail(req.body).subscribe(
        (result) => {
            res.status(200).send(result);
        },
        (error)=>{
            const message = error['sqlMessage']      
            errorLog({message}, res)},
        ()=>{console.log('(complete)')}
    )
});
const errorLog = (err, res)=>{
    res.status(500).send(err)
    console.error(err)
}
module.exports = router;
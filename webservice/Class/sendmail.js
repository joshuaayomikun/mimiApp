const nodemailer = require('nodemailer');
const mailsetup = require('./mailsetup')
let SendMail = class{
    constructor(from, to, subject, text){
        this.from = from
        this.to =to
        this.subject = subject
        this.text = text
    }
    transporter(){
        return transporter = nodemailer.createTransport(new mailsetup());
    }
} 
module.exports= SendMail
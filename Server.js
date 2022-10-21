const express = require('express');
require("dotenv").config();
const nodemailer = require('nodemailer');
const app = express();
const http = require('http');
const port = 3000;

app.use(express.json())





app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/img',express.static(__dirname + 'public/img'))

app.set('views', './views')
app.set('view engine','ejs')

app.get('/home',(req,res) => {
    res.render('index', { text: 'Thsi is Ejs'})
})

app.get('/',(req,res) => {
    res.render('pagamento', { text: ':('})
})

app.post('/',(req,res) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        //secure:false,
        auth:{
            user:"*******",
            pass:"*******"  //Senha e email censurados por segurança
        },
        tls:{
            rejectUnauthorized:false
        },
        
    
    })
    
    let mailOptions = {
        from: req.body.email,
        to:"*******",   //Destinatário
        subject: "/Mensagem de/ " + req.body.email,
        text: req.body.message + " /Mensagem de/ " + req.body.name + " Para dia " + req.body.data
    
    }
    
    transporter.sendMail(mailOptions,(err,sucesso) => {
        if(err){
            console.log(err)
        } else {
            console.log('Email enviado')
        }
    })
    
})


const server = http.createServer()

app.listen(port,console.log('Servidor escutando em http://localhost:' + port + '/home'))

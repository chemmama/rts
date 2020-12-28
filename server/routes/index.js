const express = require('express')
const router = express.Router()
var nodeMailer =require ('nodemailer'); 
 
router.post('/dataContact', (req, res) => {
    const proprio = req.body.dataContact.proprio
    const salarie = req.body.dataContact.salarie
    const chauffage = req.body.dataContact.chauffage
  
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
           
            user: 'karatefullfighting@gmail.com',
            pass: 'emileChemmama-1956'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    let mailOptions = {
        
        from:'karatefullfighting@gmail.com',
        to: 'karatefullfighting@gmail.com',
        subject: "renseignement sur karate full fighting",
        html:"<h2>Nom:</h2>"+proprio+"<br/><h2>adresse email de la demande:</h2>"+salarie+"<br/><h2>Votre demande</h2>"+chauffage
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
   
    res.end(JSON.stringify({
        reponse: "votre Mail a bien ete envoyé"

    }))


});


module.exports = router;

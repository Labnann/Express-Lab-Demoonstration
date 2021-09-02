require("dotenv").config();
const hasher = require("seedrandom");
const mailService = require("../MailService/mail.service");

function createWelcomeMail(to,code) {
    return {
        from: '"PTPT 👻" <ptpt@mail.com>',
        to: `${to}`,
        subject: "Welcome To ICT-Fest✔",
        html:
            `<div>
                <p>Your Application Has been sent successfully! Here is your participation code</p> 
                <b>${code}</b>
             </div>
            `,
    };


}


function getHashInt32(key) {
    return hasher.alea(key).int32();
}

function generateParticipationCode(mailString){
    let hash = getHashInt32(mailString);
    while(hash<0){
        hash = getHashInt32(mailString+hash);
    }
    return hash.toString(16).toUpperCase();
}



module.exports={
    mailCode : (params = { to:'', code: 0})=>{
        mailService.sendMail(createWelcomeMail(params.to,params.code));
    },

    generateParticipationCode
}
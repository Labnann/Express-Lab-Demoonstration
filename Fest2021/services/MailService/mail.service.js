"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config();


function createTransporterFromENV() {
    return nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        },
    });
}

// async..await is not allowed in global scope, must use a wrapper
async function main(mail) {

    let transporter = createTransporterFromENV();

    let info = await transporter.sendMail(mail);
    console.log("Message sent: %s", info.messageId);
}


const sendMail = (mail = {to:`test@mailtesttest`})=>{

    main(mail).catch(console.error);
}


module.exports = {
    sendMail
}
"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config();

function createMail(verificationCode) {
    return {
        from: '"PTPT 👻" <ptpt@mail.com>',
        to: "ralor76254@mnqlm.com",
        subject: "Hello ✔",
        html:
            `<div><b>Hello! Click Here to verify your mail!</b> 
                <a href ="${process.env.WEB}/verify/${verificationCode}" ></a>
             </div>
            `,
    };
}

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
async function main(verificationCode) {

    let transporter = createTransporterFromENV();
    let info = await transporter.sendMail(createMail(verificationCode));
    console.log("Message sent: %s", info.messageId);
}


const sendMail = (verificationCode=0)=>{
    main(verificationCode).catch(console.error);
}


module.exports = {
    sendMail
}
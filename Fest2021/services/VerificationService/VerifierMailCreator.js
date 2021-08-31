require("dotenv").config();
const mailService = require("mail.service");

function createVerifierMail(verificationCode,to) {
    return {
        from: '"PTPT 👻" <ptpt@mail.com>',
        to: `${to}`,
        subject: "Verify your Email Address✔",
        html:
            `<div><b>Hello! Click Here to verify your mail!</b> 
                <a href ="${process.env.WEB}/verify/${verificationCode}" ></a>
             </div>
            `,
    };
}



module.exports={
    sendVerificationMail : (params = {verificationCode: 0, to:''})=>{
        mailService.sendMail(createVerifierMail(params.verificationCode, params.to));
    }
}
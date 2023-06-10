const nodemailer=require("nodemailer")

const SendEmailUtility=async (EmailTo,EmailText,EmailSubject)=>{
    let transporter=nodemailer.createTransport({
        host:"mail.teamrabbi.com",
        port:25,
        source:false,
        auth:{
            user:"info@teamrabbil.com",
            pass:'-sR4[bhaC[Qs'
        },tls:{
            rejectUnauthorized:false
        },
    });
    let maiOption={
        from:'Task Manager MERN3<info@teamrabbil.com>',
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText
    }
    return await transporter.sendMail(maiOption);
}
module.exports=SendEmailUtility;
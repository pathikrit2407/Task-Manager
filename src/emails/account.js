var sgMail = require('@sendgrid/mail');


sgMail.setApiKey(/*process.env.SendGridAPIkey*/'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');


// sgMail.send({
//     to:"pathikritchanda2407@gmail.com",
//     from:"random@gmail.com",
//     subject:"Nothing interesting",
//     text:"This is just for a test"
// });


var welcomeEmail = (email , name) => {
    sgMail.send({
        to: email ,
        from:"taskManager@gmail.com",
        subject:"Thanks for joining !",
        text:"Welcome to Task-Manager app ,"+ name +" . Happy to see you choosing our app ."
    })
}

var cancellationEmail = (email , name) => {
    sgMail.send({
        to: email ,
        from:"taskManager@gmail.com",
        subject:"Sorry to see you go !",
        text:" Goodbye ,"+ name +" ! . Glad you used our app . Hope to see you soon in future Bye !"
    })
}

module.exports = {
    welcomeEmail,
    cancellationEmail
}
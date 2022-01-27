import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const forgetPassword_mailer = (resetPassword) => {
    console.log("Inside forget Pasword mailer", resetPassword.username.email);


  const msg =  {
            from: "prasundas115@gmail.com",
            to: resetPassword.username.email,
            subject: "Forget Password Request!!!",
            html: `<h1>Your access token for password reset is ${resetPassword.accessToken} 
                       
                  </h1>`,
        }
        sgMail
            .send(msg)
                .then(() => {
                  console.log('Email sent')
                })
                 .catch((error) => {
                  console.error(error)
                 })
 
};

export default forgetPassword_mailer;
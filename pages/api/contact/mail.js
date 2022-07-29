// // const mail = require('@sendgrid/mail');
// import emailjs from '@emailjs/browser';

// mail.setApiKey(process.env.SENDGRID_API_KEY);

// export default function handler(req, res) {
//   const body = JSON.parse(req.body);

//   const message = `
//     Name: ${body.firstName} ${body.lastName},
//     Email: ${bodt.email}
//     Message: ${body.text}
//   `;

//   const data = {
//     to: 'jahed@',
//   };

//   console.log(body);
//   res.status(200).json({ status: 'OK' });
// }

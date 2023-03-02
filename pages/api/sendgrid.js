// import sendgrid from "@sendgrid/mail";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  if (req.method === "POST") {
    const { fullname, email, subject, message } = req.body;
    //validate input
    if (
      !email ||
      !email.includes("@") ||
      !fullname ||
      fullname.trim() === "" ||
      !message ||
      message.trim() === "" ||
      !subject ||
      subject.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
    }
    //if input is valid
    // const newMessage = { fullname, email, subject, message };
    // console.log(newMessage);
    // res
    //   .status(201)
    //   .json({ message: "Successfully stored message!", message: newMessage });
    try {
      console.log("REQ.BODY", req.body);
      await sgMail
        .send({
          to: "helen.taylor@hotmail.it",
          from: "helen.taylor@hotmail.it",
          subject: `${req.body.subject}`,
          html: `
            <div class="container" style="margin-left: 20px;margin-right: 20px;">
                <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
                <div style="font-size: 16px;">
                  <p>Message:</p>
                  <p>${req.body.message}</p>
                </div>
            </div>
             `,
        })
        .then(() => {
          console.log("Email sent");
        });
    } catch (error) {
      console.log(error.response.body);
      return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ error: "" });
  }
}

export default sendEmail;

// function sendMessage() {
//   const sgMail = require("@sendgrid/mail");
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//   const msg = {
//     to: "helen.taylor@hotmail.it", // Change to your recipient
//     from: "test@example.com", // Change to your verified sender
//     subject: "Sending with SendGrid is Fun",
//     text: "and easy to do anywhere, even with Node.js",
//     html: "<strong>and easy to do anywhere, even with Node.js</strong>",
//   };
//   sgMail
//     .send(msg)
//     .then(() => {
//       console.log("Email sent");
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// export default sendMessage;

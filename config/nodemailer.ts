import nodemailer from "nodemailer";

const email = "johnalisson243@gmail.com";
const pass = "xnpvhdwxlxwbmctt";
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};

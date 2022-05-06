import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "./../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "676f2cfa44f008",
    pass: "ecc3551a74f844",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Matheus Braz <theus.braz18@gmail.com>",
      subject,
      html: body,
    });
  }
}

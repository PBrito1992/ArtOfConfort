import sgMail, { MailDataRequired } from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.EMAIL_API_KEY as string);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, subject, message, name } = req.body
    console.log(req.body)
    console.log(process.env.EMAIL_API_KEY)
    const msg: MailDataRequired = {
        to: 'geral.artofcomfort@gmail.com',
        from: 'artofcomfort.sendgrid@gmail.com',
        subject,
        html: `
        <strong>Nome: </strong> ${name}<br />
        <strong>Email: </strong> ${email}<br />
        <strong>Mensagem: </strong> ${message}
        `
    };

    try {
        await sgMail.send(msg);
        res.json({ message: `Email has been sent` })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error sending email' })
    }
}

export default handler;
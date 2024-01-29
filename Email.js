import nodeMailer from 'nodemailer'
async function send(body, config) {
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.USERNAME,
            pass: config.PASSWORD
        }
    });

    try {
        const info = await transporter.sendMail(body)
        return { statusCode: 200, message: "email send successfully", data: info }
    } catch (e) {
        return { statusCode: 500, message: "error while sending an email", error: e }
    }
}
const Email = { send }
export default Email
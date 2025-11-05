import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { EMAIL_HOST , EMAIL_FROM, EMAIL_PASS, EMAIL_PORT, EMAIL_USER } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const { name, email, asunto, message } = await request.json();

        // Configurar el transporte de nodemailer
        const transporter = nodemailer.createTransport({
            host: EMAIL_HOST,
            port: parseInt(EMAIL_PORT),
            secure: false, // true para 465, false para otros puertos
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS
            }
        });

        // Configurar el email
        const mailOptions = {
            from: EMAIL_FROM,
            to: EMAIL_FROM, // Enviar a ti mismo
            replyTo: email, // Para poder responder al cliente
            subject: `Nuevo mensaje de contacto: ${asunto}`,
            html: `
                <h2>Nuevo mensaje de contacto</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Asunto:</strong> ${asunto}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message}</p>
            `
        };

        // Enviar el email
        await transporter.sendMail(mailOptions);

        return json({ success: true, message: 'Mensaje enviado correctamente' });

    } catch (error) {
        console.error('Error al enviar email:', error);
        return json({ success: false, message: 'Error al enviar el mensaje' }, { status: 500 });
    }
};
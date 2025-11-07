import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import {createTransport} from 'nodemailer';
import { EMAIL_HOST, EMAIL_FROM, EMAIL_PASS, EMAIL_PORT } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { name, email, asunto, message } = await request.json();

        if (!name || !email || !asunto || !message) {
        return new Response(JSON.stringify({ error: "Faltan campos obligatorios" }), { status: 400 });
        }


		// Configurar el transporte de nodemailer
		const transporter = await createTransport({
			host: EMAIL_HOST,
			port: parseInt(EMAIL_PORT),
			secure: false, // true para 465, false para otros puertos
			auth: {
				user: EMAIL_FROM,
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

		const confirmationMessage = {
			from: `"Asociación de Airsoft del Atlántico" <${EMAIL_FROM}>`,
    to: email,
    subject: '¡Confirmación de recepción del Mensaje!',
    html: `
    <div style="text-align: center; gap: 10px; max-width:480px;margin:32px auto;padding:24px 16px;background:#1e3a8a;border-radius:14px;font-family:Segoe UI,Arial,sans-serif;color:#e5e7eb;">
        <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:12px;color:#38bdf8;">
            ¡Mensaje recibido!
        </h2>
        <p style="font-size:1rem;color:#fff;text-align:center;margin-bottom:16px;line-height:1.6;">
            Hola <strong style="color:#fff;">${name}</strong>,<br>
            Gracias por ponerte en contacto con nosotros.<br>
            Hemos recibido tu mensaje y te responderemos con la mayor brevedad posible.<br>
            Puedes seguir explorando la web o nuestro Instagram o responder a este correo si tienes alguna duda adicional.
        </p>
        <p style="margin:16px 0;">
            <a href="https://www.airsoftatlantico.com/" target="_blank" style="background:#22223b;padding:8px 14px;border-radius:8px;color:#fff;text-decoration:none;font-weight:600;font-size:1rem;margin-right:8px;">Aso Airsoft Atlántico</a>
            <a href="https://www.instagram.com/asoairatlan/" target="_blank" style="background:#2563eb;padding:8px 14px;border-radius:8px;color:#fff;text-decoration:none;font-weight:600;font-size:1rem;">Instagram</a>
        </p>
        <p style="font-size:0.97rem;color:#94a3b8;margin-top:16px;">
            Saludos cordiales,<br>
            <strong style="color:#fff;">El equipo de Asociación de Airsoft del Atlántico</strong>
        </p>
    </div>
    `
		};

        await transporter.sendMail(confirmationMessage);

		return json({ success: true, message: 'Mensaje enviado correctamente' });
	} catch (error) {
		console.error('Error al enviar email:', error);
		return json({ success: false, message: 'Error al enviar el mensaje' }, { status: 500 });
	}
};



import { PRIVATE_HOST_MAIL, PRIVATE_HOST_PASSWORD_MAIL} from "$env/static/private";
import nodemailer from "nodemailer";
import type { Actions } from "./$types";
import { fail } from "@sveltejs/kit";

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		let firstname = data.get("firstname") as string;
		let lastname = data.get("lastname") as string;
		let email = data.get("email") as string;
		let message = data.get("message") as string;

		try {
			const transporter = nodemailer.createTransport({
				service: "gmail",
				host: "smtp.gmail.com",
				port: 587,
				secure: false,
				auth: { user: PRIVATE_HOST_MAIL, pass: PRIVATE_HOST_PASSWORD_MAIL },
			});

			const info = await transporter.sendMail({
				from: email,
				to: PRIVATE_HOST_MAIL,
				subject: "New email from portofolio website",
				text: `Dari ${firstname} ${lastname}\n ${message}`,
			});

			console.log(info);

			return { success: true };

		} catch (error) {
			console.error("Gagal mengirim email:", error);
			return fail(500, { error: "Gagal mengirim pesan." });
		}
	}
}

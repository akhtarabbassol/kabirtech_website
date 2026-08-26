/// <reference path="../pb_data/types.d.ts" />

onRecordAfterCreateSuccess((e) => {
    const record = e.record;

    const name = record.getString("name");
    const email = record.getString("email");
    const company = record.getString("company");
    const projectType = record.getString("project_type");
    const budget = record.getString("budget");
    const message = record.getString("message");
    const created = record.getDateTime("created");

    const subject = `New project brief from ${name}${company ? ` (${company})` : ""}`;

    const html = `
        <h2>New contact form submission</h2>
        <p>A new project brief was submitted via the KabirTech Solutions website.</p>
        <table style="border-collapse:collapse;font-family:Inter,Arial,sans-serif;font-size:14px;">
            <tr><td style="padding:6px 12px;color:#555;">Name</td><td style="padding:6px 12px;"><strong>${name}</strong></td></tr>
            <tr><td style="padding:6px 12px;color:#555;">Email</td><td style="padding:6px 12px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:6px 12px;color:#555;">Company</td><td style="padding:6px 12px;">${company || "—"}</td></tr>
            <tr><td style="padding:6px 12px;color:#555;">Project type</td><td style="padding:6px 12px;">${projectType || "—"}</td></tr>
            <tr><td style="padding:6px 12px;color:#555;">Budget</td><td style="padding:6px 12px;">${budget || "—"}</td></tr>
            <tr><td style="padding:6px 12px;color:#555;">Submitted</td><td style="padding:6px 12px;">${created ? new Date(created).toLocaleString() : "—"}</td></tr>
        </table>
        <h3 style="margin-top:24px;">Message</h3>
        <p style="white-space:pre-wrap;border-left:3px solid #0ea5e9;padding-left:12px;color:#333;">${message}</p>
    `;

    const mailMessage = new MailerMessage({
        from: { name: "KabirTech Solutions" },
        to: [{ address: "info@kabirtechsolutions.com" }],
        subject,
        html,
    });

    try {
        $app.newMailClient().send(mailMessage);
    } catch (err) {
        $app.logger().error(
            "contact submission email failed",
            "from",
            email,
            "err",
            String(err),
        );
    }

    e.next();
}, "contact_submissions");

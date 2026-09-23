import nodemailer from "nodemailer";

export interface InquiryNotificationPayload {
  fullName: string;
  email: string;
  phone: string;
  courseInterest: string;
  subject: string;
  message: string;
  id?: string;
}

const DEFAULT_RECIPIENT = "toptrainings2020@gmail.com";

/**
 * Sends an email notification to toptrainings2020@gmail.com when a new inquiry arrives.
 * Gracefully simulates and logs if SMTP credentials are not yet configured.
 */
export async function sendInquiryNotificationEmail(
  inquiry: InquiryNotificationPayload
): Promise<{ sent: boolean; simulated?: boolean; messageId?: string; error?: string }> {
  const recipient = process.env.NOTIFICATION_EMAIL_TO || DEFAULT_RECIPIENT;
  const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
  const isSecure = smtpPort === 465 || process.env.SMTP_SECURE === "true";
  const fromAddress =
    process.env.SMTP_FROM ||
    (smtpUser ? `"Top Training Institute" <${smtpUser}>` : `"Top Training Institute" <${DEFAULT_RECIPIENT}>`);

  const dashboardUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://toptraininget.com"}/inquiry`;

  // Graceful fallback if credentials are not yet provided in .env.local
  if (!smtpUser || !smtpPass) {
    console.info(
      "\n==================================================",
      "\n[EMAIL NOTIFICATION SIMULATION]",
      `\nTo: ${recipient}`,
      `\nSubject: 🎓 New Student Inquiry: ${inquiry.fullName} - ${inquiry.courseInterest || "General Inquiry"}`,
      `\nStudent Name: ${inquiry.fullName}`,
      `\nPhone: ${inquiry.phone}`,
      `\nEmail: ${inquiry.email}`,
      `\nCourse: ${inquiry.courseInterest}`,
      `\nSubject: ${inquiry.subject}`,
      `\nMessage: ${inquiry.message}`,
      `\nAdmin Portal: ${dashboardUrl}`,
      "\n(Note: To send live emails, set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local)",
      "\n==================================================\n"
    );
    return { sent: true, simulated: true };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: fromAddress,
      to: recipient,
      replyTo: inquiry.email,
      subject: `🎓 New Student Inquiry: ${inquiry.fullName} - ${inquiry.courseInterest || "General Inquiry"}`,
      text: `Top Training Institute - New Student Inquiry

Student Name: ${inquiry.fullName}
Phone: ${inquiry.phone}
Email: ${inquiry.email}
Course of Interest: ${inquiry.courseInterest}
Subject: ${inquiry.subject}

Message:
${inquiry.message}

View and manage all inquiries at: ${dashboardUrl}
`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Student Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); padding: 30px 35px; text-align: left;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="font-size: 13px; font-weight: 700; color: #f59e0b; text-transform: uppercase; letter-spacing: 2px;">
                      TOP TRAINING INSTITUTE
                    </div>
                    <h1 style="margin: 8px 0 0 0; color: #ffffff; font-size: 22px; font-weight: 800; line-height: 1.3;">
                      🎓 New Student Inquiry Received
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 30px 35px;">
              <p style="margin: 0 0 20px 0; font-size: 15px; color: #475569; line-height: 1.6;">
                A prospective student just submitted an inquiry on <a href="https://toptraininget.com" style="color: #2563eb; text-decoration: none; font-weight: 600;">toptraininget.com</a>. Here are their contact details and inquiry information:
              </p>

              <!-- Lead Details Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 20px;">
                    <table width="100%" cellpadding="6" cellspacing="0">
                      <tr>
                        <td width="35%" style="font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase;">Student Name</td>
                        <td width="65%" style="font-size: 15px; font-weight: 700; color: #0f172a;">${escapeHtml(inquiry.fullName)}</td>
                      </tr>
                      <tr>
                        <td style="font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase;">Phone Number</td>
                        <td style="font-size: 15px; font-weight: 700; color: #2563eb;">
                          <a href="tel:${escapeHtml(inquiry.phone)}" style="color: #2563eb; text-decoration: none;">📞 ${escapeHtml(inquiry.phone)}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase;">Email</td>
                        <td style="font-size: 14px; color: #0f172a;">
                          <a href="mailto:${escapeHtml(inquiry.email)}" style="color: #2563eb; text-decoration: underline;">${escapeHtml(inquiry.email)}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase;">Course Interest</td>
                        <td style="font-size: 14px; font-weight: 700; color: #1e3a8a;">
                          <span style="background-color: #dbeafe; color: #1e40af; padding: 4px 10px; border-radius: 6px; display: inline-block;">
                            ${escapeHtml(inquiry.courseInterest || "General Inquiry")}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase;">Subject</td>
                        <td style="font-size: 14px; font-weight: 600; color: #334155;">${escapeHtml(inquiry.subject)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Student Message -->
              <div style="margin-bottom: 25px;">
                <div style="font-size: 13px; font-weight: 700; color: #475569; text-transform: uppercase; margin-bottom: 8px;">
                  Student Message:
                </div>
                <div style="background-color: #ffffff; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 4px; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">
                  ${escapeHtml(inquiry.message)}
                </div>
              </div>

              <!-- Quick Action Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 25px;">
                <tr>
                  <td align="center">
                    <a href="${dashboardUrl}" target="_blank" style="background-color: #1e3a8a; color: #ffffff; padding: 14px 28px; font-size: 14px; font-weight: 700; text-decoration: none; border-radius: 8px; display: inline-block; box-shadow: 0 4px 8px rgba(30,58,138,0.25);">
                      Open Inquiries Dashboard →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 35px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8; line-height: 1.5;">
                This notification was automatically sent to <strong>${recipient}</strong> by the Top Training Institute inquiry system.<br>
                Official Website: <a href="https://toptraininget.com" style="color: #64748b;">toptraininget.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.info(`[Email Sent] Message ID: ${info.messageId} to ${recipient}`);
    return { sent: true, messageId: info.messageId };
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : "Failed to send email";
    console.error("[Email Dispatch Error]:", error);
    return { sent: false, error: errorMsg };
  }
}

function escapeHtml(text?: string): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

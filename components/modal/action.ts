import emailjs from "emailjs-com";

export const sendMail = async (templateParams: Record<string, unknown>) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  try {
    const res = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    return res;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

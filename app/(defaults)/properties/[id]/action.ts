import emailjs from "emailjs-com";
export const fetchSingleProperty = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/all-properties/${id}`,
      {
        next: { revalidate: 0 },
      }
    );

    if (!response.ok) {
      // throw new Error("Network response was not ok");
      console.error(
        `Error fetching property with id ${id}: Network response was not ok`
      );
      return null;
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching property with id ${id}:`, error);
    throw error;
  }
};

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

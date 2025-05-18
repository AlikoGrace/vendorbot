"use server";

import Prisma from "@/lib/prisma";

export const signup = async (formData: FormData) => {
  const businessName = formData.get("businessName") as string;

  await Prisma.vendors.create({
    data: {
      business_name: businessName,
      phone_number: formData.get("whatsappNumber") as string,
      bot_name: `${businessName}'s Bot`,
    },
  });

  const to = "+233265542141";

  const url = `https://graph.facebook.com/v22.0/562679923606696/messages`;

  const token = process.env.FB_TOKEN;

  const payload = {
    to,
    messaging_product: "whatsapp",
    type: "template",
    template: {
      name: "welcome",
      language: {
        code: "en_US",
      },
      components: [
        {
          type: "header",
          parameters: [
            {
              type: "text",
              parameter_name: "business_name",
              text: businessName,
            },
          ],
        },
      ],
    },
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  console.log({ data: JSON.stringify(data, null, 4) });
};

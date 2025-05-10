"use server";

import Prisma from "@/lib/prisma";
import { Twilio } from "twilio";

const twilioClient = new Twilio(
  process.env.TWILIO_ACCOUNT_SID as string,
  process.env.TWILIO_AUTH_TOKEN as string
);

export const signup = async (formData: FormData) => {
  console.log("formData", formData);

  const businessName = formData.get("businessName") as string;

  await Prisma.vendors.create({
    data: {
      business_name: businessName,
      phone_number: formData.get("whatsappNumber") as string,
      bot_name: `${businessName}'s Bot`,
    },
  });

  await twilioClient.messages.create({
    body: `Hi ${businessName}, I am venderbot. What would you like to name me?`,
    to: "whatsapp:+233507989633",
    from: "whatsapp:+14155238886",
  });
};

"use server";

import Prisma from "@/lib/prisma";

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
};

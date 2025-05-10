import Prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import MessagingResponse from "twilio/lib/twiml/MessagingResponse";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const params = new URLSearchParams(body);
  const messageBody = params.get("Body")?.toLowerCase();
  const vendor = params.get("From")?.replaceAll("whatsapp:", "");

  const twiml = new MessagingResponse();

  if (messageBody?.includes("/botname")) {
    const botName = messageBody.split("/botname")[1].toString().trim();

    await Prisma.vendors.update({
      where: {
        phone_number: "0558344624", //vendor,
      },
      data: {
        bot_name: botName,
      },
    });

    twiml.message(`Your assistant is called, ${botName}!`);
  }

  return new Response(twiml.toString(), {
    status: 200,
    headers: {
      "Content-Type": "text/xml",
    },
  });
}

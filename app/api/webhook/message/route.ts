import Prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

type WebhookResponse = {
  object: "whatsapp_business_account";
  entry: {
    id: string;
    changes: {
      field: "messages";
      value: {
        messaging_product: "whatsapp";
        metadata: {
          display_phone_number: string;
          phone_number_id: string;
        };
        contacts: {
          profile: {
            name: string;
          };
          wa_id: string;
        }[];
        messages: {
          from: string;
          id: string;
          timestamp: string;
          type: "text";
          text: {
            body: string;
          };
        }[];
      };
    }[];
  }[];
};

export async function GET(req: NextRequest) {
  const challenge = new URL(req.url).searchParams.get("hub_challenge");

  return new NextResponse(challenge);
}

export async function POST(req: NextRequest) {
  const { entry } = (await req.json()) as WebhookResponse;

  const {
    from,
    text: { body: messageBody },
  } = entry[0].changes[0].value.messages[0];

  if (messageBody.includes("/botname")) {
    const botName = messageBody.split("/botname")[1].toString().trim();

    await Prisma.vendors.update({
      where: {
        phone_number: "0558344624",
      },
      data: {
        bot_name: botName,
      },
    });

    const to = "+233265542141";

    const url = `https://graph.facebook.com/v22.0/562679923606696/messages`;

    const token = process.env.FB_TOKEN;

    const payload = {
      to,
      messaging_product: "whatsapp",
      recipient_type: "individual",
      type: "text",
      text: {
        body: `Great! Your assistant is now called ${botName}`,
      },
    };


    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(5000)
    });


    console.log(await response.json())
  }

  return new Response("Success", {
    status: 200,
  });
}

import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
// import { env } from "~/env.mjs";
import { buffer } from "micro";
// import { prisma } from "~/server/db";

const stripe = new Stripe(
  "sk_test_51NVJ4RECpTjJRRCodmsyMIK613vbK0ElhyUwMReszzx6qs8FzZQDdi8VtZ5DjYkn5gNQryjTDMNkf01QLKVwxwTP00DT8HavNL",
  {
    typescript: true,
    apiVersion: "2023-10-16",
  },
);

export const config = {
  api: {
    bodyParser: false,
  },
};

const webhook = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"] as string;
    let event;
    console.log("event :", event);
    try {
      event = stripe.webhooks.constructEvent(
        buf,
        sig,
        "sk_test_51NVJ4RECpTjJRRCodmsyMIK613vbK0ElhyUwMReszzx6qs8FzZQDdi8VtZ5DjYkn5gNQryjTDMNkf01QLKVwxwTP00DT8HavNL",
      );
    } catch (err) {
      let message = "Unknown Error";
      if (err instanceof Error) message = err.message;
      res.status(400).send(`Webhook Error: ${message}`);
      return;
    }

    // switch (event.type) {
    //   case "checkout.session.completed":
    //     const completedEvent = event.data.object as {
    //       id: string;
    //       metadata: {
    //         userId: string;
    //       };
    //     };

    //     await prisma.user.update({
    //       where: {
    //         id: completedEvent.metadata.userId,
    //       },
    //       data: {
    //         credits: {
    //           increment: 100,
    //         },
    //       },
    //     });

    //     break;
    //   default:
    //     console.log(`Unhandled event type ${event.type}`);
    // }

    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default webhook;
import { Logger } from "../../Logger/index.ts";
import { colors } from "../../Colors/index.ts";
import { startAnimation, stopAnimation } from "../../Animation/index.ts";
import "https://deno.land/std@0.191.0/dotenv/load.ts";
import { Message } from "../../Types/types.ts";

export class Logging {
  static async getChannelMessages() {
    const token = Deno.env.get("token");

    if (!token) {
      Logger.log("Token is missing!", "error");
      return;
    }

    const channel_id = prompt(
      `${colors.magenta}[?]${colors.reset} Channel id to save log:`,
    );
    const limitStr = prompt(
      `${colors.magenta}[?]${colors.reset} How many messages to save:`,
    );

    if (!channel_id || !limitStr) {
      Logger.log("Channel ID or limit is missing", "error");
      return;
    }

    const limit = parseInt(limitStr, 10);
    if (isNaN(limit) || limit <= 0) {
      Logger.log("Limit is invalid", "error");
      return;
    }

    let allMessages: Message[] = [];
    let beforeId: string | null = null;
    const Animation = startAnimation();

    try {
      let remainingLimit = limit;
      while (remainingLimit > 0) {
        const fetchLimit = Math.min(remainingLimit, 100);
        let url =
          `https://discord.com/api/v9/channels/${channel_id}/messages?limit=${fetchLimit}`;

        if (beforeId) {
          url += `&before=${beforeId}`;
        }

        const response = await fetch(url, {
          headers: {
            "accept": "*/*",
            "authorization": `${token}`,
          },
          method: "GET",
        });

        if (!response.ok) {
          stopAnimation(Animation);
          Logger.log("Failed to fetch", "error");
          console.log(
            `${colors.red}Error${colors.reset}: ${response.statusText}`,
          );
          return;
        }

        const messages: Message[] = await response.json();
        if (messages.length === 0) {
          break;
        }

        allMessages = allMessages.concat(messages);
        remainingLimit -= messages.length;
        beforeId = messages[messages.length - 1].id;

        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      stopAnimation(Animation);
      const relativePath = `./Logs/channel_${channel_id}_${limit}.json`;

      await Deno.writeTextFile(
        relativePath,
        JSON.stringify(allMessages, null, 2),
      );

      Logger.log(`Saved: ${allMessages.length} messages`, "success");
      Logger.log(`Channel ID: ${channel_id}`, "success");
      Logger.log(`File Path: ${relativePath}`, "success");
    } catch (error) {
      stopAnimation(Animation);
      Logger.log("Failed to fetch messages", "error");
      console.error(error);
    }
  }

  static getPersonMessages() {
    console.log("WIP");
  }
}

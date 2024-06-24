import { Logger } from "../../Logger/index.ts";

export class settings {
  static async tokenSetting() {
    console.log(`-------------------------------
|\x1b[32m [1] \x1b[0m Save token to .env     |
|\x1b[32m [2] \x1b[0m Check token from .env  |
-------------------------------`);

    const answer = prompt("[?] Select Mode :");

    if (answer === "1") {
      const token = prompt("[!] Enter Your Token :");
      if (token) {
        try {
          await Deno.env.set("token", token)
          Logger.log(
            "SAVED YOUR TOKEN TO .env SUCCESSFULLY",
            "success",
          );
        } catch (_error) {
          Logger.log("Failed to save token", "error");
        }
      } else {
        Logger.log("Token input was empty", "error");
      }
    } else if (answer === "2") {
      try {
        const token = await Deno.env.get("token");
        Logger.log(`TOKEN : ${token}`, "success");
      } catch (_error) {
        Logger.log("Failed to read token", "error");
      }
    } else {
      Logger.log("Invalid Select Input", "error");
    }
  }
}

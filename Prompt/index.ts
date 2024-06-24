import { Logger } from "../Logger/index.ts";

export class Prompt {
  static showTitle() {
    console.log(`
           \x1b[32m██████╗ ███████╗ ██████╗      ██╗      ██████╗  ██████╗ 
           ██╔══██╗██╔════╝██╔════╝      ██║     ██╔═══██╗██╔════╝ 
           ██║  ██║███████╗██║     █████╗██║     ██║   ██║██║  ███╗
           ██║  ██║╚════██║██║     ╚════╝██║     ██║   ██║██║   ██║
           ██████╔╝███████║╚██████╗      ███████╗╚██████╔╝╚██████╔╝
           ╚═════╝ ╚══════╝ ╚═════╝      ╚══════╝ ╚═════╝  ╚═════╝ 
           \x1b[0m
        `);
  }

  static showOptions(): "clogger" | "plogger" | "settings" {
    console.log(`
                        -----------------------------
                        |\x1b[32m [1] \x1b[0m Channel Logger mode  |
                        |\x1b[32m [2] \x1b[0m Person Msg Logger    |
                        |\x1b[32m [3] \x1b[0m Settings mode        |       
                        -----------------------------`);
    const answer = prompt("\x1b[32m[?] \x1b[0mSelect :");
    if (answer === "1") {
      Logger.log("Turned on Logger Mode", "success");
      return "clogger";
    } else if (answer === "2") {
      Logger.log("Turned on Person Msg Logger Mode", "success");
      return "plogger";
    } else if (answer === "3") {
      Logger.log("Turned on Settings mode", "success");
      return "settings";
    } else {
      Logger.log("Invalid option!", "error");
      return this.showOptions();
    }
  }
}

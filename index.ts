import { colors } from "./colors/index.ts";
import { Logger } from "./logger/index.ts";
import { Prompt } from "./prompt/index.ts";
import { Logging } from "./function/logging/index.ts";
import { settings } from "./function/settings/index.ts";

while (true) {
  Prompt.showTitle();

  const mode = Prompt.showOptions();

  switch (mode) {
    case "clogger":
      await Logging.getChannelMessages();
      break;
    case "plogger":
      await Logging.getPersonMessages();
      break;

    case "settings":
      await settings.tokenSetting();
      break;

    default:
      Logger.log("Invalid Select Input", "error");
      break;
  }

  const continuePrompt = prompt(
    `\n${colors.brightYellow}Return to menu?${colors.reset} (Y/n): `,
  );
  if (continuePrompt?.toLowerCase() !== "y") {
    break;
  }
  await Deno.stdout.write(new TextEncoder().encode("\x1b[2J\x1b[H"));
}
Logger.log("Goodbye! :)", "success");

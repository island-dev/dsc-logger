import { colors } from "../Colors/index.ts";

export class Logger {
  static log(message: string, type: "success" | "warn" | "error" = "success") {
    let prefix = "";

    switch (type) {
      case "success":
        prefix = this.success();
        break;
      case "warn":
        prefix = this.warn();
        break;
      case "error":
        prefix = this.error();
        break;
    }

    console.log(`${this.crateTimestamp()} ${prefix} ${message}`);
  }

  static error() {
    return `${colors.red}[X]${colors.reset}`;
  }

  static warn() {
    return `${colors.yellow}[!]${colors.reset}`;
  }

  static success() {
    return `${colors.green}[@]${colors.reset}`;
  }

  static crateTimestamp() {
    return `${colors.brightBlack}[${
      new Date().toLocaleTimeString()
    }]${colors.reset}`;
  }
}

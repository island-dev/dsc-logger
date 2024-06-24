import { colors } from "../Colors/index.ts";

export const startAnimation = (): number => {
  const frames = [".", "..", "..."];
  let i = 0;

  const animation = setInterval(() => {
    Deno.stdout.write(
      new TextEncoder().encode(
        `\r${colors.green}Running${frames[i].padEnd(3, ' ')}${colors.reset}`
      ),
    );
    i = (i + 1) % frames.length;
  }, 100);

  return animation;
};

export const stopAnimation = (animation: number) => {
  clearInterval(animation);
  Deno.stdout.write(new TextEncoder().encode("\r"));
};

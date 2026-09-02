import { spawn } from "node:child_process";

const app = spawn("npm", ["run", "start"], {
  stdio: "inherit",
  env: process.env,
});

app.on("error", (error) => {
  console.error("Failed to start React Router server:", error);
  process.exit(1);
});

app.on("exit", (code) => {
  process.exit(code ?? 1);
});

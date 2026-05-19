import { execSync } from "node:child_process";
import { existsSync, renameSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..");
const apiPath = join(root, "src/app/api");
const apiDisabledPath = join(root, "src/app/_api_disabled");

let apiMoved = false;

function disableApi() {
  if (existsSync(apiPath)) {
    renameSync(apiPath, apiDisabledPath);
    apiMoved = true;
  }
}

function restoreApi() {
  if (apiMoved && existsSync(apiDisabledPath)) {
    renameSync(apiDisabledPath, apiPath);
    apiMoved = false;
  }
}

disableApi();

try {
  execSync("next build", {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, STATIC_EXPORT: "true" },
  });
  console.log("\nStatic export written to ./out");
  console.log("Note: contact form API is excluded in static builds.");
} finally {
  restoreApi();
}

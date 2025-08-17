#!/usr/bin/env node

import askProjectInfo from "./utils/controls.js";
import Banner from "./utils/banner.js";
import createProject from "./utils/generator.js";

/**
 * Main Fuc:
 */

async function main() {
  console.clear()
  await Banner();
  const userInput = await askProjectInfo();
  await createProject(userInput);
}

main();

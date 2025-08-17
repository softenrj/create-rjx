#!/usr/bin/env node
import Banner from './utils/banner.js';
import createProject from './utils/generator.js';
import askProjectInfo from './utils/controls.js';

async function main() {
  console.clear()
  await Banner();
  const userInput = await askProjectInfo();
  await createProject(userInput);
}

main();

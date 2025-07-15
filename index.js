#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import gradient from 'gradient-string';
import figlet from 'figlet';
import ora from 'ora';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

async function showBanner() {
  const rainbow = chalkAnimation.rainbow('✨ Welcome to RJX CLI...');
  await sleep(1800);
  rainbow.stop();

  console.clear();
  console.log(
    gradient.pastel(
      figlet.textSync('RJX CLI', {
        font: 'Big',
        horizontalLayout: 'default',
        verticalLayout: 'default',
      })
    )
  );
  await sleep(1000);
}

async function askProjectInfo() {
  const answers = await inquirer.prompt([
    {
      name: 'projectName',
      type: 'input',
      message: chalk.cyan('💡 Enter your project name:'),
      default: 'rjx-app',
    },
    {
      name: 'language',
      type: 'list',
      message: chalk.cyan('🛠️ Choose your preferred language:'),
      choices: ['JavaScript', 'TypeScript'],
    },
  ]);

  return answers;
}

async function createProject({ projectName, language }) {
  const spinner = ora(`🚀 Creating ${projectName}...`).start();

  const templateFolder = language === 'TypeScript' ? 'ts' : 'js';
  const templateDir = path.join(__dirname, 'templates', templateFolder);
  const targetDir = path.join(process.cwd(), projectName);

  try {
    await fs.copy(templateDir, targetDir);
    await sleep(1000);
    spinner.succeed(chalk.green('✨ Project created successfully!'));

    console.log(gradient.atlas(`\n📂 Directory: ${projectName}\n`));
    console.log(chalk.bold.magenta('🔧 Next Steps:\n'));
    console.log(`${chalk.cyan('›')} cd ${projectName}`);
    console.log(`${chalk.cyan('›')} npm install`);
    console.log(`${chalk.cyan('›')} npm run dev\n`);

    console.log(gradient.instagram('✨ Made with ❤️  by Raj — follow @softenrj on GitHub!\n'));
  } catch (err) {
    spinner.fail(chalk.red('❌ Project creation failed.'));
    console.error(err);
  }
}

async function main() {
  console.clear();
  await showBanner();
  const userInput = await askProjectInfo();
  await createProject(userInput);
}

main();

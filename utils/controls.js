import chalk from 'chalk';
import inquirer from 'inquirer';

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

export default askProjectInfo
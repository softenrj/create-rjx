import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs-extra';
import chalk from 'chalk';
import ora from 'ora';
import ProgressBar from 'progress';
import terminalLink from 'terminal-link';
import qrCode from 'qrcode-terminal'

const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Clone GitHub repo with dynamic progress
 */
function cloneRepo(repo, targetDir) {
    return new Promise((resolve, reject) => {
        const git = spawn('git', ['clone', '--depth', '1', '--progress', repo, targetDir]);

        const bar = new ProgressBar('Cloning template [:bar] :percent', {
            complete: '█',
            incomplete: '░',
            width: 30,
            total: 100,
            clear: true,
        });

        git.stderr.on('data', (data) => {
            const str = data.toString();
            const match = str.match(/(\d+)%/);
            if (match) {
                const pct = parseInt(match[1]);
                bar.update(pct / 100);
            }
        });

        git.on('close', (code) => {
            if (code === 0) {
                bar.update(1);
                resolve();
            } else {
                reject(new Error(`git clone exited with code ${code}`));
            }
        });
    });
}

/**
 * Copy template files with dynamic progress
 */
async function copyTemplateWithProgress(src, dest) {
    const files = await fs.readdir(src);
    const total = files.length;
    let copied = 0;

    const bar = new ProgressBar('Setting up project [:bar] :percent', {
        complete: '█',
        incomplete: '░',
        width: 30,
        total,
        clear: true,
    });

    for (const file of files) {
        await fs.copy(path.join(src, file), path.join(dest, file));
        copied++;
        bar.update(copied / total);
    }
}

/**
 * Main function to create a project
 */
async function createProject({ projectName, language }) {
    const spinner = ora(`Creating ${projectName}...`).start();
    const repo = 'https://github.com/softenrj/rjx-template.git';
    const targetDir = path.join(process.cwd(), projectName);

    try {
        // Clone repo dynamically
        await cloneRepo(repo, targetDir);

        // Remove .git folder
        await fs.rm(path.join(targetDir, '.git'), { recursive: true, force: true });

        // Copy selected template folder
        const templateFolder = language === 'TypeScript' ? 'ts' : 'js';
        await copyTemplateWithProgress(path.join(targetDir, templateFolder), targetDir);

        // Remove unused template folders
        await fs.remove(path.join(targetDir, 'js'));
        await fs.remove(path.join(targetDir, 'ts'));

        await sleep(500);
        spinner.succeed(chalk.green('Project created successfully!'));

        // Show professional next steps
        console.log(chalk.bold(`\nDirectory: ${projectName}`));
        console.log(chalk.bold('Next Steps:'));
        console.log(`${chalk.cyan('›')} cd ${projectName}`);
        console.log(`${chalk.cyan('›')} npm install`);
        console.log(`${chalk.cyan('›')} npm run dev`);

        // Clickable GitHub link
        const url = "https://github.com/softenrj/";
        const githubLink = terminalLink('@softenrj on GitHub', url);
        console.log(chalk.gray(`Created by Raj — follow ${githubLink}\n`));

        qrCode.generate(url, { small: true });

    } catch (err) {
        spinner.fail(chalk.red('Project creation failed.'));
        console.error(err);
    }
}

export default createProject;

import chalkAnimation from 'chalk-animation';
import cfonts from 'cfonts';
import chalk from 'chalk';

const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));


/**
 * @async
 */
const Banner = async () => {
    const welcomeMsg = chalkAnimation.rainbow("✨ Welcome to RJX CLI...");
    await sleep(1800);
    welcomeMsg.stop();

    cfonts.say('RJX CLI', {
        font: 'block',
        align: 'center',
        colors: ['cyan', 'magenta'],
        background: 'transparent',
        letterSpacing: 1,
        lineHeight: 1,
        space: true,
        maxLength: '0',
    });

    cfonts.say('Build • Code • Deploy', {
        font: 'console',
        align: 'center',
        colors: ['greenBright'],
    });

};

export default Banner;

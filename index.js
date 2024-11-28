import puppeteer from 'puppeteer';
import chalk from 'chalk';
import figlet from 'figlet';
import readline from 'readline';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const displayBanner = () => {
    console.clear();
    console.log(
        chalk.green(
            figlet.textSync('Wick Studio', { horizontalLayout: 'full' })
        )
    );
    console.log(chalk.blueBright("Instagram Unfollow Script"));
    console.log(chalk.yellow("Developed by Wick Studio | discord.gg/wicks | github.com/wickstudio"));
    console.log();
};

const askUsername = () => {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question(chalk.cyan("Please enter your Instagram username: "), (username) => {
            rl.close();
            resolve(username.trim());
        });
    });
};

const waitForEnter = () => {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        console.log(chalk.green("Press Enter in the terminal to start the process once you're on the following page."));
        rl.on('line', () => {
            rl.close();
            resolve();
        });
    });
};

const unfollowAll = async () => {
    displayBanner();

    const username = await askUsername();
    const followingUrl = `https://www.instagram.com/${username}/following/`;

    console.log(chalk.magenta(`Navigate to: ${followingUrl}`));

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setViewport({ width: 1280, height: 800 });

    await page.goto('https://www.instagram.com', { waitUntil: 'networkidle2' });

    console.log(chalk.green("Log in to your account and navigate to your following page."));
    console.log(chalk.green(`Navigate to: ${followingUrl}`));
    console.log(chalk.green("Once you're on the following page, press Enter in the terminal to start."));
    await waitForEnter();

    let accountsUnfollowed = 0;

    while (true) {
        try {
            const unfollowButtons = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('button'))
                    .filter((button) => button.innerText === 'Following')
                    .map((_, index) => index);
            });

            if (!unfollowButtons || unfollowButtons.length === 0) {
                console.log(chalk.yellow("No more accounts to unfollow. Process complete!"));
                break;
            }

            console.log(chalk.blueBright(`Found ${unfollowButtons.length} accounts to process.`));

            for (let index of unfollowButtons) {
                try {
                    await page.evaluate((i) => {
                        const buttons = Array.from(document.querySelectorAll('button'));
                        if (buttons[i] && buttons[i].innerText === 'Following') {
                            buttons[i].click();
                        }
                    }, index);

                    await delay(2000);

                    const confirmationClicked = await page.evaluate(() => {
                        const confirmButton = Array.from(document.querySelectorAll('button'))
                            .find((button) => button.innerText === 'Unfollow');
                        if (confirmButton) {
                            confirmButton.click();
                            return true;
                        }
                        return false;
                    });

                    if (!confirmationClicked) {
                        console.log(chalk.red("❌ Failed to click the confirmation button. Skipping this account."));
                        continue;
                    }

                    await delay(3000);

                    const stillFollowing = await page.evaluate((i) => {
                        const buttons = Array.from(document.querySelectorAll('button'));
                        return buttons[i] && buttons[i].innerText === 'Following';
                    }, index);

                    if (stillFollowing) {
                        console.log(chalk.red(`❌ Account ${index + 1} was not unfollowed. Retrying...`));
                        continue;
                    }

                    accountsUnfollowed++;
                    console.log(chalk.green(`✅ Successfully unfollowed account ${index + 1}. Total: ${accountsUnfollowed}`));
                } catch (innerError) {
                    console.log(chalk.red(`Error processing account ${index + 1}: ${innerError.message}`));
                }
            }

            console.log(chalk.magenta("Scrolling down to load more accounts..."));
            await page.evaluate(() => window.scrollBy(0, 1000));
            await delay(3000);
        } catch (outerError) {
            console.error(chalk.red(`Error during unfollow process: ${outerError.message}`));
            break;
        }
    }

    console.log(chalk.green("🎉 All accounts have been unfollowed successfully!"));
    console.log(chalk.yellow("Thank you for using this script. Visit us at discord.gg/wicks | github.com/wickstudio"));

    await browser.close();
};

unfollowAll().catch((error) => {
    console.error(chalk.red(`Script failed: ${error.message}`));
});
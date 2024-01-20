const generateMarkdown = require(`./utils/generateMarkdown`);
const inquirer = require("inquirer");
const fs = require("fs");

let init = async () => {
	try {
		const responses = await inquirer.prompt([
			{
				type: `input`,
				message: `What is the title of your project?`,
				name: `title`,
			},
			{
				type: `input`,
				message: `Provide a short description explaining the what, why, and how of your project.`,
				name: `description`,
			},
			{
				type: `input`,
				message: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.`,
				name: `install`,
			},
			{
				type: `input`,
				message: `Provide instructions and examples for usage.`,
				name: `usage`,
			},
			{
				type: `input`,
				message: `How would you like to contribute?`,
				name: `contributing`,
			},
			{
				type: `input`,
				message: `What are you testing?`,
				name: `test`,
			},
			{
				type: `list`,
				message: `Select a license`,
				name: `license`,
				choices: [`MIT`, `Apache License 2.0`,`Mozilla Public License 2.0`, `GNU General Public License v3.0`,`None`],
			},
			{
				type: `input`,
				message: `Please enter your GitHub username.`,
				name: `github`,
			},
			{
				type: `input`,
				message: `Please enter your email.`,
				name: `email`,
			},
			{
				type: `input`,
				message: `Do you have any questions?`,
				name: `question`,
			},
		]);
		
		await writeToFile(responses);
	} catch (error) {
		console.log(error, `There was something wrong. IDK lol`);
	}
};

function writeToFile(responses) {
	fs.writeFile(`Test-README.md`, generateMarkdown(responses), (err) => err ? console.error(`Error ` + err) : console.log(`README.md has been successfully created!`));
}

// Function call to initialize app
init();

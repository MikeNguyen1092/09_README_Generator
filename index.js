const generateMarkdown = require(`./utils/generateMarkdown`);
const inquirer = require("inquirer");
const fs = require("fs");
const { error } = require("console");

let init = async () => {
	try {
		const responses= await inquirer.prompt([
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
			// {
			// 	type: `input`,
			// 	message: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.`,
			// 	name: `install`,
			// },
			// {
			// 	type: `input`,
			// 	message: `Provide instructions and examples for use.`,
			// 	name: `usage`,
			// },
			// {
			// 	type: `input`,
			// 	message: ``,
			// 	name: `contributing`,
			// },
			// {
			// 	type: `input`,
			// 	message: ``,
			// 	name: `test`,
			// },
			// {
			// 	type: `list`,
			// 	message: `Select a license`,
			// 	name: `license`,
			// 	choices: ``,
			// },
			// {
			// 	type: `input`,
			// 	message: `Please put your GitHub username.`,
			// 	name: `github`,
			// },
			// {
			// 	type: `input`,
			// 	message: `Please enter your email.`,
			// 	name: `email`,
			// },
			// {
			// 	type: ``,
			// 	message: ``,
			// 	name: `question`,
			// },
		]);
		await console.log(responses);
        await writeToFile(responses)
	} catch (error) {
		console.log(error, `There was something wrong. IDK lol`);
	}
};

// // TODO: Create a function to write README file
function writeToFile(responses) {

    console.log(`line 70 ` + generateMarkdown(responses));
    fs.writeFile(`README.md`,(generateMarkdown(responses)), (err) => {
        error(err);
    });
    console.log(`line 72 ` + generateMarkdown(responses));
}

// Function call to initialize app
init();

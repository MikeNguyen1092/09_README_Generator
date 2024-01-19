// TODO: Include packages needed for this application
const generateMarkdown = require(`./utils/generateMarkdown`);
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
let init = async () => {
	let inquirer = await require("inquirer");
	inquirer
		.prompt([
			{
				type: `input`,
				message: `What is the title of your project?`,
				name: `title`,
			},
			{
				type: `input`,
				message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide`,
				name: `description`,
			},
			{
                type: `input`,
                message: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.`,
                name: `install`
            },
            {
                type:`input`,
                message:`Provide instructions and examples for use.`,
                name:`usage`,
            },
            {
                type:`input`,
                message:``,
                name:`contributing`,
            },
            {
                type:`input`,
                message:``,
                name:`test`,
            },
            {
                type:`list`,
                message:`Select a license`,
                name:`license`,
                choices:``
            },
            {
                type:`input`,
                message:`Please put your GitHub username.`,
                name:`github`,
            },
            {
                type:`input`,
                message:`Please enter your email.`,
                name:`email`,
            },
            {
                type:``,
                message:``,
                name:`question`,
            },
		])
		.then((answers) => {
			writeToFile()
		})
		.catch((error) => {
			if (error.isTtyError) {
				console.log(`There was something wrong. IDK lol`);
			} else {
				console.log(`Success!`);
			}
		});
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

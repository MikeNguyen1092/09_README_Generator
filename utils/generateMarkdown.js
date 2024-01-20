// Get license badge based on what the user picks
let renderLicenseBadge = (license) => {
	if (license !== `None`) {
		switch (license) {
			case `MIT`:
				return `![Static Badge](https://img.shields.io/badge/license-MIT-blue)`;

			case `Apache License 2.0`:
				return `![Static Badge](https://img.shields.io/badge/License-Apache%202.0-green)`;

			case `Mozilla Public License 2.0`:
				return `![Static Badge](https://img.shields.io/badge/License-MPL%202.0-green)`;

			case `GNU General Public License v3.0`:
				return `![Static Badge](https://img.shields.io/badge/License-GPLv3-orange)`;
		}
	}
	return ` `;
};
// Put a link to the license page in the license section of the README file
function renderLicenseLink(license) {
	if (license !== `None`) {
		switch (license) {
			case `MIT`:
				return `[MIT](https://choosealicense.com/licenses/mit/)`;

			case `Apache License 2.0`:
				return `[Apache License 2.0](https://opensource.org/license/apache-2-0)`;

			case `Mozilla Public License 2.0`:
				return `[Mozilla Public License 2.0](https://opensource.org/license/mpl-2-0/)`;

			case `GNU General Public License v3.0`:
				return `[BSD 3-Clause License](https://opensource.org/license/bsd-3-clause/)`;
		}
	}
	return ` `;
}
// Generate the README based on the data from the user
function generateMarkdown(data) {
	return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
	${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Contact](#contact)
- [Questions](#questions)


## Installation
	${data.install}


## Usage
	${data.usage}


## Credits



## License

${renderLicenseLink(data.license)}

---

## Contribute

	${data.contributing}


## Tests

	${data.test}

## Contact 
	GitHub username: ${data.github}
	Email: ${data.email}

## Questions
	${data.question}
`;
}

module.exports = generateMarkdown;

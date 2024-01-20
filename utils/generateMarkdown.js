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

function generateMarkdown(data) {
	console.log("gMark like 15 " + data.title);
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

	Testing: ${data.test}

## Contact 
	GitHub username: ${data.github}
	Email: ${data.email}

## Questions
	${data.question}
`;
}

module.exports = generateMarkdown;

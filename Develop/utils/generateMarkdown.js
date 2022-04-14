// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  #### Table of Contents
  1. [Project Description](#project-diescription)
  2. [Installation Instructions](#installation-instructions)
  3. [Usage Information](#usage-information)
  4. [Contribution Guidelines](#contribution-guidelines)
  5. [Code of Conduct](#code-of-conduct)
  6. [Test Instructions](#test-instructions)
  7. [License](#license)
  8. [Questions](#questions)

  ## Project Description
  * ${data.description}
  ## Installation Instructions
  * ${data.installInstructions}
  ## Usage Information
  * ${data.usageInfo}
  ## Contribution Guidelines
  * ${data.contributionGuidelines}
  ## Code of Conduct
  * [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)
  ## Test Instructions
  * ${data.testInstructions}
  ## License
  * ${data.licenseOptions}
  ## Questions 
  * Contact me on Github [${data.githubUser}](https://github.com/${data.githubUser})
  * or Email at ${data.email}
`;
}

module.exports = generateMarkdown;

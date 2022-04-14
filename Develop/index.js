const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = [
    "Title of Project",
    "Project Description",
    "Installation Instructions",
    "Usage Information",
    "Contribution Guidelines",
    "Test Instructions",
    "License Option",
    "Github Username",
    "Email Address",
];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'installInstructions',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: questions[5],
        },
        {
            type: 'checkbox',
            name: 'lincenseOptions',
            message: questions[6],
            choices: [
                "[MIT License](MITLICENSE.txt)",
                "[ISC License](ISCLICENSE.txt)",
            ]
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: questions[7],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8],
        },
    ]);
};


function writeToFile(fileName, data) {}

const init = () => {
    promptUser()
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();
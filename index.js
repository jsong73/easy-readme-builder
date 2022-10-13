const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown")


const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "Please provide a short description explaining the what, why, and how of your project.",
        name: "description",
    },
    {
        type: "list",
        message: "What kind of license will you need?",
        name: "license",
        choices: ["MIT", "MIT", "MIT", "MIT"],
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation",
        default: "npm i",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "test",
        default: "npm test",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage",
    },
    {
        type: "input",
        message: "List your collaborators. If none, type none.",
        name: "contribution",
    },
]

// fs.writeFileSync() creates a new file if the specified file does not exist
function writeToFile(fileName, data){
//process.cwd is used to get the current working directory of the node.js process.
return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init(){
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("Generating README...");
        //...rest operator (bc in function) to store answers in array
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
}

init();


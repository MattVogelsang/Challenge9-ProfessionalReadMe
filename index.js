// TODO: Include packages needed for this application
const fs=require("fs")
const generateMarkdown=require("./utils/generateMarkdown")
const inquirer=require("inquirer")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"What is you're Github?",
        name:"MattVogelsang",
    }
    ,
    {
        type:"input",
        message:"What is you're Email?",
        name:"Vogelsangmatt@gmail.com",
    }
    ,
    {
        type:"input",
        message:"What is you're Project name?",
        name:"ReadME Genertor",
    }
    , {
        type:"input",
        message:"Please write a short description of your project",
        name:"Write a ReadME",
    }
    ,
    {
        type:"list",
        message:"Choose the following license:",
        name:"license",
        choices:["MIT","ISC"]
    },
    {
        type:"input",
        message:"What Command should be run to install dependencies?",
        name:"npm i",
    }
    ,
    {
        type:"input",
        message:"what command should be run to test?",
        name:"npm test",
    }
    
];
// function renderLicenseLink(license) {
//     const licenseLinks = {
//       'MIT': '[MIT](https://opensource.org/licenses/MIT)',
//       'GPLv3': '[GPLv3](https://www.gnu.org/licenses/gpl-3.0)',
//       'Apache 2.0': '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)',
//       'None': ''
//     };
//     return licenseLinks[license];
//   }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const content=generateMarkdown(data)
  fs.writeFile(fileName,content,(err)=>err?console.error(err):console.log("success"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data=>{
        writeToFile("./output/README.md",data)
    })
}

// Function call to initialize app
init();

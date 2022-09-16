const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const placeToGo = path.resolve(__dirname, "dist")
const fileToGoThere = path.join(placeToGo, "index.html")
const newTeamArray = []
const generateHTML = require("./src/generatehtml")


function prompt () {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        },
    ]).then(response => {
        let manager = new Manager(response.managerName, response.id, response.email, response.officeNumber)
        newTeamArray.push(manager)
        console.log(newTeamArray)
        trafficControl()
    })
}

function engineerPrompt () {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github?"
        },
    ]).then(response => {
        let engineer = new Engineer(response.engineerName, response.id, response.email, response.github)
        newTeamArray.push(engineer)
        console.log(newTeamArray)
        trafficControl()
    })
}

function internPrompt () {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "Where did the intern go to school?"
        },
    ]).then(response => {
        let intern = new Intern(response.internName, response.id, response.email, response.school)
        newTeamArray.push(intern)
        console.log(newTeamArray)
        trafficControl()
    })
}

function trafficControl () {
    inquirer.prompt([
        {
            type: "list",
            name: "newMember",
            message: "Do you want to add more employees?",
            choices: ["Yes, Engineer", "Yes, Intern", "Yes, Manager", "No"]
        }
    ]).then(response =>{
        if (response.newMember==="Yes, Engineer"){
            engineerPrompt()
        }
        else if(response.newMember==="Yes, Intern"){
            internPrompt()
        }
        else if(response.newMember==="Yes, Manager"){
            prompt()
        }
        else {
            //fire build HTML function
            createTeamCard()
        }
    })
}
function createTeamCard () {
    fs.writeFileSync(fileToGoThere, generateHTML(newTeamArray))
}
prompt()
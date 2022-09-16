const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const inquirer = require("inquirer")

const newTeamArray = []

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

//add engineer prompt here
//add intern prompt here
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
            //engineer prompt()
        }
        else if(response.newMember==="Yes, Intern"){
            //Intern prompt()
        }
        else if(response.newMember==="Yes, Manager"){
            //Manager prompt()
        }
        else {
            //fire build HTML function
        }
    })
}
prompt()
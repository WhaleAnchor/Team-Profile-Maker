// Uses fs and Inquirer package
const fs = require("fs");
const inquirer = require("inquirer");

// Classes of "Employee"
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// Uses Node.Js Path Module
const path = require("path");
const generateHTML = path.resolve(__dirname, "dist"); // Directory folder of dist
const distPath = path.join(generateHTML, "index.html"); // generates an "index.html" file
const generateTeam = require("./src/templateHtml.js") // uses the template in src folder

teamArray = []; // Whenever new array is added, it will be .push'd to here.

function startTeamPrompt() {

    function createManager() {
    console.log("______________________________________________________________________________");  
    console.log("LET'S MAKE YOUR TEAM! Press Enter after you answer!");  
    console.log("______________________________________________________________________________");  
    inquirer.prompt ([
        {
        type: "input",
        name: "name",
        message: "Please type the manager's name."
        },
        {
        type: "input",
        name: "id",
        message: "Please type the manager's id number."
        },
        {
        type: "input",
        name: "email",
        message: "Please type the manager's email address."
        },
        {
        type: "input",
        name: "officeNumber",
        message: "Please type the manager's office number."
        }
    ]).then(input => {
        const manager = new Manager(input.name, input.id, input.email, input.officeNumber);
        teamArray.push(manager); //push method to add array data to the teamArray array

        addMoreEmployees(); // runs the prompts function for adding more employees.
    });
    };

    function addMoreEmployees() {
        console.log("______________________________________________________________________________");
        inquirer.prompt([
            {
        type: "list",
        message: "Which type of employee do you want to add to your team?",
        name: "addEmployee",
        choices: ["Engineer", "Intern", "I'm finished adding employees."]
        }
        ]).then(function (employeeChoices) {
            console.log("______________________________________________________________________________");
            switch(employeeChoices.addEmployee) {

            case "Engineer":
            createEngineer();
            break;

            case "Intern":
            createIntern();
            break; // breaks on each case to stop and run their respective functions.

            default:
            createHtml(); // If the user is finished and selects the third option, then the html file is created with the user inputted data.
        }
        });
    };

    function createEngineer() {
        inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please type the engineer's name."
        },
        {
            type: "input",
            name: "id",
            message: "Please type the engineer's id number." 
        },
        {
            type: "input",
            name: "email",
            message: "Please type the engineer's email address."
        },
        {
            type: "input",
            name: "github",
            message: "Please type the engineer's github username."
        }
        ]).then(input => {
        const engineer = new Engineer(input.name, input.id, input.email, input.github);
        teamArray.push(engineer); //push method to add array data to the teamArray array

        addMoreEmployees(); // runs the prompts function for adding more employees.
        });
    };

    function createIntern() {
        inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please type the intern's name."
        },
        {
            type: "input",
            name: "id",
            message: "Please type the intern's id number." 
        },
        {
            type: "input",
            name: "email",
            message: "Please type the intern's email address."
        },
        {
            type: "input",
            name: "school",
            message: "Please type the name of the intern's school."
        }
        ]).then(input => {
        const intern = new Intern(input.name, input.id, input.email, input.school);
        teamArray.push(intern); //push method to add array data to the teamArray array

        addMoreEmployees(); // runs the prompts function for adding emore employees.
        });
    };

    function createHtml() {
        console.log("Team created! Go to the ./dist folder to check out your new index.html!")
        console.log("______________________________________________________________________________");
        fs.writeFileSync(distPath, generateTeam(teamArray), "UTF-8")
    };

    createManager(); // runs the first prompt function, starting with manager, then additional employees.
    };

startTeamPrompt(); // calls the function.
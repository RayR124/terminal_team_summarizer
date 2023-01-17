const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./library/employee");
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");

const createHTML = require("./source/createHTML");

const team = [];

function exit() {
    let doc = createHTML(team);
    //console.log("Employees: ", team);
    //console.log("Generated HTML", doc);
    fs.writeFileSync("./dist/index.html", doc);
}

async function addEmployee() {
    await inquirer.prompt([
        {
            type: "list",
            name: "Position",
            message: "What is the position of this employee?",
            choices: ["Manager", "Engineer", "Intern", "Exit"]
        },
    ]).then(async (answer) => {
        if (answer.Position == "Manager") {
            managerQuestions()
        } else if (answer.Position == "Engineer") {
            engineerQuestions()
        } else if (answer.Position == "Intern") {
            internQuestions()
        } else if (answer.Position == "Exit") {
            exit()
        }
    });
}

async function managerQuestions() {
    await inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: "What is their name?"
        },
        {
            type: "input",
            name: "ID",
            message: "What is thier Employee ID?"
        },
        {
            type: "input",
            name: "Email",
            message: "What is their email address?"
        },
        {
            type: "input",
            name: "Role",
            message: "What is their active role as Manager?"
        }
    ]).then((mAnswers) => {
        const manager = new Manager(mAnswers.Name, mAnswers.ID, mAnswers.Email, mAnswers.Role);
        team.push(manager);
    }).then(() => {
        const res = inquirer.prompt([
            {
                type: "list",
                name: "Continue",
                message: "Do you want to add another employee?",
                choices: ["Yes", "No"]
            },
        ]); return res;
    }).then((secondPromptResult) => {
        if (secondPromptResult.Continue == "Yes") {
            addEmployee()
        } else {
            exit()
        };
    });
};

async function engineerQuestions() {
    await inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: "What is their name?"
        },
        {
            type: "input",
            name: "ID",
            message: "What is their employee ID?"
        },
        {
            type: "input",
            name: "Email",
            message: "What is their email?"
        },
        {
            type: "input",
            name: "GitHub",
            message: "What is their GitHub username?"
        }
    ]).then((eAnswers) => {
        const engineer = new Engineer(eAnswers.Name, eAnswers.ID, eAnswers.Email, eAnswers.GitHub);
        team.push(engineer);
    }).then(() => {
        const res = inquirer.prompt([
            {
                type: "list",
                name: "Continue",
                message: "Do you want to add another employee?",
                choices: ["Yes", "No"]
            },
        ]); return res;
    }).then((secondPromptResult) => {
        if (secondPromptResult.Continue == "Yes") {
            addEmployee()
        } else {
            exit()
        };
    });
};

async function internQuestions() {
    await inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: "What is their name?"
        },
        {
            type: "input",
            name: "ID",
            message: "What is their employee ID?"
        },
        {
            type: "input",
            name: "Email",
            message: "What is their email?"
        },
        {
            type: "input",
            name: "Training",
            message: "Where did they get their degree or certificate?"
        }
    ]).then((iAnswers) => {
        const intern = new Intern(iAnswers.Name, iAnswers.ID, iAnswers.Email, iAnswers.Training);
        team.push(intern);
    }).then(() => {
        const res = inquirer.prompt([
            {
                type: "list",
                name: "Continue",
                message: "Do you want to add another employee?",
                choices: ["Yes", "No"]
            },
        ]); return res;
    }).then((secondPromptResult) => {
        if (secondPromptResult.Continue == "Yes") {
            addEmployee()
        } else {
            exit()
        };
    });
};

addEmployee();
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
    console.log("Employees: ", team);
    console.log("Generated HTML", doc);
    fs.writeFileSync("./dist/index.html", doc);
}

async function addEmployee() {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "Position",
            message: "What is the position of this employee?",
            choices: ["Manager", "Engineer", "Intern", "Exit"]
        },
    ]).then((answer) => {
        console.log(answer);
    if (answer == "Manager") {
        managerQuestions()
    } else if (answer == "Engineer") {
        engineerQuestions()
    } else if (answer == "Intern") {
        internQuestions()
    } else if (answer == "Exit") {
        exit()
    }
});
}

async function managerQuestions() {
    const mAnswers = await inquirer.prompt([
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
            name: "email",
            message: "What is their email address?"
        },
        {
            type: "input",
            name: "Role",
            message: "What is their active role as Manager?"
        }
    ]).then((mAnswers) => {
        const manager = new Manager(mAnswers.name, mAnswers.id, mAnswers.email, mAnswers.role);
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
        if (secondPromptResult.choices == "Yes") {
            addEmployee()
        } else {
            exit()
        };
    });
};

async function engineerQuestions() {
    const eAnswers = await inquirer.prompt([
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
            name: "email",
            message: "What is their email?"
        },
        {
            type: "input",
            name: "GitHub",
            message: "What is their GitHub username?"
        }
    ]).then((eAnswers) => {
        const engineer = new Engineer(eAnswers.name, eAnswers.id, eAnswers.email, eAnswers.gitHub);
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
        if (secondPromptResult.choices == "Yes") {
            addEmployee()
        } else {
            exit()
        };
    });
};

async function internQuestions() {
    const iAnswers = await inquirer.prompt([
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
            name: "email",
            message: "What is their email?"
        },
        {
            type: "input",
            name: "Training",
            message: "Where did they get their degree or certificate?"
        }
    ]).then((iAnswers) => {
        const intern = new Intern(iAnswers.name, iAnswers.id, iAnswers.email, iAnswers.training);
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
        if (secondPromptResult.choices == "Yes") {
            addEmployee()
        } else {
            exit()
        };
    });
};

addEmployee();
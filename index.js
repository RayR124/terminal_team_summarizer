const inquirer = require("inquirer");

const employee = require("./library/employee");
const manager = require("./library/manager");
const engineer = require("./library/engineer");
const intern = require("./library/intern");

const createHTML = require("./source/createHTML");

const team = [];

const addEmployee = async () => {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "Position",
            message: "What is the position of this employee?",
            choices: ["Manager", "Engineer", "Intern", "Exit"]
        },
    ])
    if (answer.name == "Manager") {
        managerQuestions()
    } else if (answer.name == "Engineer") {
        engineerQuestions()
    } else if (answer.name == "Intern") {
        internQuestions()
    } else if (answer.name == "Exit") {
        exit()
    }
};

async function managerQuestions() {
    const mAnswers = await inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "ID",
            message: "What is your Employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "Role",
            message: "What is your active role as Manager?"
        }
    ]).then((mAnswers) => {
        const manager = new Manager(mAnswers.name, mAnswers.id, mAnswers.email, mAnswers.role);
        team.push(manager);
        addEmployee();
    })
};

async function engineerQuestions() {
    const eAnswers = await inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "ID",
            message: "What is your employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "GitHub",
            message: "What is your GitHub username?"
        }
    ]).then((eAnswers) => {
        const engineer = new Engineer(eAnswers.name, eAnswers.id, eAnswers.email, eAnswers.gitHub);
        team.push(engineer);
        addEmployee();
    })
};

async function internQuestions() {
    const iAnswers = await inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "ID",
            message: "What is your employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "Training",
            message: "Where did you get your degree or certificate?"
        }
    ]).then((iAnswers) => {
        const intern = new Intern(iAnswers.name, iAnswers.id, iAnswers.email, iAnswers.training);
        team.push(intern);
        addEmployee();
    })
};

function exit() {
    let doc = generateHTML(employees);
    console.log("Employees: ", employees);
    console.log( "Generated HTML", doc);
    fs.writeFileSync("./dist/index.html", doc);
}

addEmployee();
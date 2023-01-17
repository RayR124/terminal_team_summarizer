const employee = require("../library/employee");

const createManager = function (manager) {
    return `
        <div class="card">
        <h2>Manager:</h2>
            <div class="title">
                <h1>${manager.name}</h1>
            </div>
            <div>
                <ul class="id">ID: ${manager.ID}</ul>
                <ul class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></ul>
                <ul class="role">Role: ${manager.role}</ul>
            </div>
        </div>
    `;
}

const createEngineer = function (engineer) {
    return `
        <div class="card">
        <h2>Engineer:</h2>
            <div class="title">
                <h1>${engineer.name}</h1>
            </div>
            <div>
                <ul class="id">ID: ${engineer.ID}</ul>
                <ul class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></ul>
                <ul class="role">GitHub: ${engineer.gitHub}</ul>
            </div>
        </div>
    `;
}

const createIntern = function (intern) {
    return `
        <div class="card">
        <h2>Intern:</h2>
            <div class="title">
                <h1>${intern.name}</h1>
            </div>
            <div>
                <ul class="id">ID: ${intern.ID}</ul>
                <ul class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></ul>
                <ul class="role">Training: ${intern.training}</ul>
            </div>
        </div>
    `;
}

createHTML = (data) => {
    pageArray = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const position = employee.getPosition();

        if (position === "Manager") {
            const managerCard = createManager(employee);
            pageArray.push(managerCard);
        }
        if (position === "Engineer") {
            const engineerCard = createEngineer(employee);
            pageArray.push(engineerCard);
        }
        if (position === "Intern") {
            const internCard = createIntern(employee);
            pageArray.push(internCard);
        }
    }
    const employeeCards = pageArray.join('');
    const createTeam = createPage(employeeCards);
    return createTeam;
}

const createPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>terminal_team_summarizer</title>
    <!doctype html>
    <html>
</head>

<body>
    <h1 style="text-align: center">My Team Summary</h1>
    <div class="container">
    ${employeeCards}
    </div>
</body>
</html>
    `;
}

module.exports = createHTML;
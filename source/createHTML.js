const employee = require("../library/employee");

const createManager = function (manager) {
    return `
    <div class="col-4 mt-4 wholeCard">
        <div class="card h-100">
            <div class="card-header">
                <h2>${manager.name}</h2>
                <h3>Manager</h4>
            </div>
            <div> class="card-body">
                <ul class="id">ID: ${manager.ID}</ul>
                <ul class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></ul>
                <ul class="role">Role: ${manager.role}</ul>
            </div>
        </div>
    </div>
    `;
}

const createEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4 wholeCard">
        <div class="card h-100">
            <div class="card-header">
                <h2>${engineer.name}</h2>
                <h3>Manager</h4>
            </div>
            <div> class="card-body">
                <ul class="id">ID: ${engineer.ID}</ul>
                <ul class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></ul>
                <ul class="role">GitHub: ${engineer.gitHub}</ul>
            </div>
        </div>
    </div>
    `;
}

const createIntern = function (intern) {
    return `
    <div class="col-4 mt-4 wholeCard">
        <div class="card h-100">
            <div class="card-header">
                <h2>${intern.name}</h2>
                <h3>Manager</h4>
            </div>
            <div> class="card-body">
                <ul class="id">ID: ${intern.ID}</ul>
                <ul class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></ul>
                <ul class="role">Training: ${intern.training}</ul>
            </div>
        </div>
    </div>
    `;
}

createHTML = (data) => {
    pageArray = [];

    for (let i = 0; 1 < data.length; i++) {
        const employee = data[i];
        const position = employee.getPosition();
        console.log(employee);

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
    <div class="container">
        <div class="row justify-content-center" id="team-cards">
        ${employeeCards}
        </div>
    </div>
    `;
}

module.exports = createHTML;
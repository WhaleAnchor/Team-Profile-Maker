// This is the index.html template that will receive user inputted data and inject it into the html template
// generateTeam will extract the user inputted data and insert the html codes into the body of the html file.
const generateTeam = team => {

    // html file for the manager card.
    const generateManager = manager => {
        return `
            <div class="card employee-card">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        `;
    }; // Manager name/role/id/email/office_number is added from the user inputted data.

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
            <div class="card employee-card">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">${engineer.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        `;
    }; // Engineer name/role/id/email/github is added from the user inputted data.

    // create the html for interns
    const generateIntern = intern => {
        return `
            <div class="card employee-card">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">${intern.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        `;
    }; // Intern name/role/id/email/school is added from the user inputted data.

    const htmlArray = []; // This array is what will be injected into the html body as a series of div's.

        htmlArray.push(team
            .filter(employee => employee.getRole() === "Manager") // filters through the array data with getRole() function. 
            .map(manager => generateManager(manager)) // map creates a new array with the manager html template
        );
        htmlArray.push(team
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => generateEngineer(engineer)) // creates a new array with the engineer html template
            .join("") // combines into the array without adding a comma between each array
        );
        htmlArray.push(team
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => generateIntern(intern)) // creates a new array with the intern html template
            .join("") // combines into the array without adding a comma between each array
        );

    return htmlArray.join(""); // takes in all the combined employee arrays without adding a comma between each array

}

// export function to generate entire page
module.exports = team => {
    // inserts the html templates into the body
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" shrink-to-fit=no>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>My Team Profiles</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 bg-danger">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
    `;
};
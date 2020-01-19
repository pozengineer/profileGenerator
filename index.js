// const questions = [

// ];
// function writeToFile(fileName, data) {

// }
// function init() {

// }
// init();

const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./generateHTML.js');
const axios = require('axios');
const convertFactory = require('electron-html-to');


inquirer.prompt([
    {
        type: 'input',
        message: 'What is your gitHub username?',
        name: 'userName',
    },
    {
        type: 'list',
        message: 'What is your preferred colour?',
        name: 'userColor',
        choices: [
            "green",
            "blue",
            "pink",
            'red'
        ]
    }
])
    .then((data) => {
        const userName = data.userName;
        const userColor = data.userColor;
        console.log(userName);
        console.log(userColor);
        const queryUrl = `https://api.github.com/users/${userName}`;

        axios.get(queryUrl).catch().then(response => {
            console.log(response.data);
            console.log(userColor);
            return generateHTML(userColor, response.data);
        })
            .then(htmlData => {
                console.log(htmlData);
                var conversion = convertFactory({
                    converterPath: convertFactory.converters.PDF
                });

                const htmlTrial = `<h1>${userName}</h1>`;
                // conversion({ html: htmlTrial }, (err, result) => {
                conversion({ html: htmlData }, (err, result) => {

                    if (err) {
                        return console.error(err);
                    }

                    console.log(result.numberOfPages);
                    console.log(result.logs);
                    result.stream.pipe(fs.createWriteStream(`./${userName}.pdf`));
                    conversion.kill(); // necessary if you use the electron-server strategy, see below for details
                });
            });
    });
/**
 * documentation generation script
 */
const fs = require("fs");
const {exec} = require("child_process");

const doc_template_path = "./jaguarjs-jsdoc";

function generateDoc() {
    exec(`jsdoc -r ./src -d ./docs -t ./jaguarjs-jsdoc`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
    });
}

if (!fs.existsSync(doc_template_path)) {
    console.log("Cloning template ...");
    exec(`git clone https://github.com/davidshimjs/jaguarjs-jsdoc.git`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log("Generate documentation ...");
            generateDoc();
        }
    });
} else {
    console.log("Generate documentation ...");
    generateDoc();
}

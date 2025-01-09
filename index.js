#!/usr/bin/env node
import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { passion } from "gradient-string";
import figlet from "figlet";

async function main() {
    console.log(
        passion(
            figlet.textSync("Funny CLI!", {
                horizontalLayout: "full",
                font: "Lil Devil",
            })
        ),
        "\n Welcome to the Funny CLI by @mubeenkexe! Let's create a new project! \n"
    );

    const args = process.argv.slice(2);
    let projectName = args[0];

    if (!projectName) {
        const response = await inquirer.prompt([
            {
                name: "projectName",
                type: "input",
                message: "Enter your funny project name:",
            },
        ]);

        projectName = response.projectName;
    }

    const targetDir = path.resolve(process.cwd(), projectName);

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const templateDir = path.resolve(__dirname, "template");

    try {
        console.log("Creating project...");
        await fs.copy(templateDir, targetDir);
        console.log("Project created successfully!");
    } catch (err) {
        console.error("Error creating project:", err);
    }
}

main();

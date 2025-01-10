#!/usr/bin/env node
import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { passion } from "gradient-string";
import figlet from "figlet";
import chalk from "chalk";

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
                message: "Enter your funny project name: ",
            },
        ]);

        projectName = response.projectName.toLowerCase().replace(/ /g, "-");
    }

    const { framework } = await inquirer.prompt([
        {
            name: "framework",
            type: "list",
            message: "Select a framework: ",
            choices: ["Express"],
        },
    ]);

    const { language } = await inquirer.prompt([
        {
            name: "language",
            type: "list",
            message: "Choose a language:",
            choices: [
                { name: chalk.yellow("JavaScript"), value: "JavaScript" },
                { name: chalk.blue("TypeScript"), value: "TypeScript" },
            ],
        },
    ]);

    let features = [];
    if (framework === "Express") {
        features = await inquirer.prompt([
            {
                name: "features",
                type: "checkbox",
                message: "Select features for Express:",
                choices: ["tRPC", "Base"],
            },
        ]);
    } else if (framework === "React" || framework === "Next") {
        features = await inquirer.prompt([
            {
                name: "features",
                type: "checkbox",
                message: `Select features for ${framework}:`,
                choices: ["Redux", "Base"],
            },
        ]);
    }

    const selectedFeature = features.features[0] || "Base";

    const targetDir = path.resolve(process.cwd(), projectName);

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const templateDir = path.resolve(
        __dirname,
        "templates",
        framework.toLowerCase(),
        language.toLowerCase(),
        selectedFeature.toLowerCase()
    );

    try {
        console.log("\nCreating project...\n");
        await fs.copy(templateDir, targetDir);
        console.log("\nProject created successfully!\n");
        console.log(`\ncd ${projectName}\nnpm install\nnpm run dev\n`);
    } catch (err) {
        console.error("Error creating project:", err);
    }
}

main();

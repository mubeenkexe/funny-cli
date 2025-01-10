import app from "./app.js";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

app.listen(process.env.PORT, () => {
    const message = `Server running on port ${process.env.PORT}`;
    const info = chalk.blue(
        `🐧: Check out the app at http://localhost:${process.env.PORT} !\n🐧: Crafted with care by @mubeenkexe \n🐧: If you enjoy it, a star on https://github.com/mubeenkexe/funny-cli would make my day! \n🐧: Feel free to remove this message from src/server.js, but I hope it brings a smile!`
    ); // Feel free to remove this message.
    const box = chalk.red(
        `┌─────────────────────────────┐\n│ ${message} │\n└─────────────────────────────┘`
    );
    console.log(`${box}\n${info}`); // from here too
});

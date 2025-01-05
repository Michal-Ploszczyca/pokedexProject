import { getCommands } from "./registryOfCommands.js";
import { CLICommand } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>) {
    console.log("Welcome to the Pokedex!\nUsage:\n");

    for (const key in commands) {
        if (commands.hasOwnProperty(key)) {
            const command = commands[key];
            console.log(`${command.name}: ${command.description}`);
        }
    }
}
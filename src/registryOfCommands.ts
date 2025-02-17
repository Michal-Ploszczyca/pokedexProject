import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { CLICommand } from "./command.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        // can add more commands here
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
    };
}
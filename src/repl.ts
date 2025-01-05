import { rawListeners } from "process";
import { error } from "console";
import { createInterface }  from "node:readline"
import { stdin, stdout }  from "node:process";
import { getCommands } from "./registryOfCommands.js";



export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'pokedex >  '
});

// Start the REPL prompt
rl.prompt();


const commands = getCommands();


// Listen for user input
rl.on('line', async (input)=> {
    // Parse the input into an array of words
    const words = cleanInput(input);

    if (words.length === 0) {
        // If input is empty, show the prompt again
        rl.prompt();
        return;
    }

    const command = commands[input.trim()];

    if (command) {
        try {
            command.callback(commands);
        } catch (error) {
            console.error("An error occured:", error)
        }
    } else {
        console.log("Unknown command");
    }
    
    // Show the prompt again for the next input
    rl.prompt();
});

// Handle REPL closure
rl.on('close', () => {
    console.log('REPL session ended. Goodbye!');
    process.exit(0);
});
}



export function cleanInput(input: string): string[] {
    return input
        .split(/\s+/) // Split by any whitespace
        .map(word => word.trim().toLowerCase()) // Trim each word
        .filter(word => word.length > 0); // Remove empty strings

}
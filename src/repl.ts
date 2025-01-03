import { rawListeners } from "process";

import { createInterface }  from "node:readline"
import { stdin, stdout }  from "node:process";


export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'pokedex >  '
});

// Start the REPL prompt
rl.prompt();

// Listen for user input
rl.on('line', async (input)=> {
    // Parse the input into an array of words
    const words = cleanInput(input);

    if (words.length === 0) {
        // If input is empty, show the prompt again
        rl.prompt();
        return;
    }

    const commandName = words[0]
    console.log(`Your command was: ${commandName}`);
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
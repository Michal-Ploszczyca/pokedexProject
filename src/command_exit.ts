// import { rawListeners } from "process";
// import { createInterface }  from "node:readline"
// import { stdin, stdout }  from "node:process";
// import { startREPL } from "./repl";
export function commandExit() {
    console.log("Closing the Pokedex... Goodbye!");
    process.exit(0)
}
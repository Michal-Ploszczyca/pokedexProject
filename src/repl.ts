export function cleanInput(input: string): string[] {
    return input
        .split(/\s+/) // Split by any whitespace
        .map(word => word.trim().toLowerCase()) // Trim each word
        .filter(word => word.length > 0); // Remove empty strings

  }
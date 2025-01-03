import { cleanInput } from "./repl";
import { describe, expect, test} from 'vitest';

describe.each([
    {
      input: "  hello  world  ",
      expected: ["hello", "world"],
    },
    {
        input: "  ",
        expected: [],   
    },
    {
        input: "Hello WORLD",
        expected: ["hello", "world"],
    },
    {
        input: "  hellO  ",
        expected: ["hello"],
    },
    // TODO: more test cases here
  ])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
      // TODO: call cleanInput with the input here
      const result = cleanInput(input)
  
      // The `expect` and `toHaveLength` functions are from vitest
      // they will fail the test if the condition is not met
      expect(result).toHaveLength(expected.length);
      for (const i in expected) {
        // likewise, the `toBe` function will fail the test if the values are not equal
        expect(result[i]).toBe(expected[i]);
      }

      
    });
  });

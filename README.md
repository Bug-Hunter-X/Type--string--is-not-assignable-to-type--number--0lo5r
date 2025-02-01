# Type 'string' is not assignable to type 'number'

This TypeScript code demonstrates a common type error: assigning a string value to a variable declared as a number.

## Bug

The `bug.ts` file contains a function `performOperation` that takes two numbers as input and returns their sum.  The issue arises when trying to pass a string as an argument, which causes the compiler to raise a type error. The program also lacks proper error handling, which makes it difficult to debug.
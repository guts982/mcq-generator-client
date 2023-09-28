import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

export interface IGlobalState {
   
    mcq:IMCQResponse | null,
    mcqLoading:boolean,
}


const sampleMcq:IMCQResponse = {
  "questions": [
    {
      "id": 0,
      "question": "What is Python known for?",
      "a": "Its complexity",
      "b": "Its difficulty to read",
      "c": "Its versatility",
      "d": "Its limited capabilities"
    },
    {
      "id": 1,
      "question": "How does Python define code blocks?",
      "a": "By using indentation",
      "b": "y using braces and symbols",
      "c": "By using quotation marks",
      "d": "By using semicolons"
    },
    {
      "id": 2,
      "question": "What is the proper way to end a statement in Python?",
      "a": "With a period",
      "b": "With a comma",
      "c": "With a semicolon",
      "d": "With a newline character"
    },
    {
      "id": 3,
      "question": "How are variables declared and assigned in Python?",
      "a": "using the $ symbol",
      "b": "using the = operator",
      "c": "using the colon (:) symbol",
      "d": "using the # symbol"
    },
    {
      "id": 4,
      "question": "What type of data does Python allow you to store in variables?",
      "a": "Only strings",
      "b": "Only numbers",
      "c": "Only lists and dictionaries",
      "d": "Various data types"
    },
    {
      "id": 5,
      "question": "Which of the following is not a built-in data type in Python?",
      "a": "Integers",
      "b": "Strings",
      "c": "Booleans",
      "d": "Sets"
    },
    {
      "id": 6,
      "question": "What is the purpose of a conditional statement in Python?",
      "a": "To iterate through a loop",
      "b": "To handle exceptions",
      "c": "To define a function",
      "d": "To control the flow of a program based on conditions"
    },
    {
      "id": 7,
      "question": "How do you define a function in Python?",
      "a": "Using the \"function\" keyword",
      "b": "Using the \"def\" keyword",
      "c": "Using the \"func\" keyword",
      "d": "Using the \"define\" keyword"
    },
    {
      "id": 8,
      "question": "What data structure is used for ordered collections of items in Python?",
      "a": "Tuples",
      "b": "Dictionaries",
      "c": "Lists",
      "d": "Sets"
    },
    {
      "id": 9,
      "question": "What is the purpose of an exception handling in Python?",
      "a": "To improve code readability",
      "b": "To improve code efficiency",
      "c": "To prevent bugs",
      "d": "To catch and handle errors or unexpected situations in code"
    }
  ],
  "answers": [
    {
      "id": 0,
      "option": "c",
      "question": "What is Python known for?",
      "answer": " Its versatility"
    },
    {
      "id": 1,
      "option": "a",
      "question": "How does Python define code blocks?",
      "answer": " By using indentation"
    },
    {
      "id": 2,
      "option": "d",
      "question": "What is the proper way to end a statement in Python?",
      "answer": " With a newline character"
    },
    {
      "id": 3,
      "option": "b",
      "question": "How are variables declared and assigned in Python?",
      "answer": " using the = operator"
    },
    {
      "id": 4,
      "option": "d",
      "question": "What type of data does Python allow you to store in variables?",
      "answer": " Various data types "
    },
    {
      "id": 5,
      "option": "d",
      "question": "Which of the following is not a built-in data type in Python?",
      "answer": " Sets"
    },
    {
      "id": 6,
      "option": "d",
      "question": "What is the purpose of a conditional statement in Python?",
      "answer": " To control the flow of a program based on conditions"
    },
    {
      "id": 7,
      "option": "b",
      "question": "How do you define a function in Python?",
      "answer": " Using the \"def\" keyword"
    },
    {
      "id": 8,
      "option": "c",
      "question": "What data structure is used for ordered collections of items in Python?",
      "answer": " Lists"
    },
    {
      "id": 9,
      "option": "d",
      "question": "What is the purpose of an exception handling in Python?",
      "answer": " To catch and handle errors or unexpected situations in code"
    }
  ],
  "input": "Lesson: Python Fundamentals\\r\\n\\r\\nPython is a versatile and widely-used programming language known for its simplicity and readability. In this lesson, we\\'ll cover some of the fundamental concepts and syntax of Python.\\r\\n\\r\\n1. **Python Syntax**\\r\\n\\r\\n   - Python uses indentation (whitespace) to define code blocks, unlike many other programming languages that use braces or other symbols. Proper indentation is crucial for the code\\'s structure.\\r\\n\\r\\n   - Python statements end with a newline character (no semicolons required).\\r\\n\\r\\n2. **Variables and Data Types**\\r\\n\\r\\n   - Variables are used to store data. In Python, you can declare a variable and assign a value to it like this:\\r\\n     ```python\\r\\n     x = 5\\r\\n     ```\\r\\n\\r\\n   - Python has several built-in data types, including integers, floats, strings, lists, tuples, and dictionaries.\\r\\n\\r\\n3. **Conditional Statements**\\r\\n\\r\\n   - Python supports common conditional statements, such as `if`, `elif` (else if), and `else`. For example:\\r\\n     ```python\\r\\n     if x > 10:\\r\\n         print(\"x is greater than 10\")\\r\\n     elif x == 10:\\r\\n         print(\"x is equal to 10\")\\r\\n     else:\\r\\n         print(\"x is less than 10\")\\r\\n     ```\\r\\n\\r\\n4. **Loops**\\r\\n\\r\\n   - Python offers `for` and `while` loops. Use `for` loops to iterate over sequences (e.g., lists), and `while` loops for general-purpose looping.\\r\\n\\r\\n5. **Functions**\\r\\n\\r\\n   - Functions are blocks of code that can be reused. You can define your functions using the `def` keyword.\\r\\n\\r\\n   - Example of a simple function:\\r\\n     ```python\\r\\n     def greet(name):\\r\\n         print(\"Hello, \" + name + \"!\")\\r\\n     ```\\r\\n\\r\\n6. **Lists and Dictionaries**\\r\\n\\r\\n   - Lists are ordered collections of items. They can contain various data types.\\r\\n\\r\\n   - Dictionaries are collections of key-value pairs. Each key is unique.\\r\\n\\r\\n7. **Exception Handling**\\r\\n\\r\\n   - Python allows you to catch and handle exceptions using `try`, `except`, and `finally` blocks.\\r\\n\\r\\n8. **Modules and Libraries**\\r\\n\\r\\n   - Python has a vast standard library and many third-party libraries that extend its functionality. You can import modules using `import` statements.\\r\\n\\r\\n   - Example:\\r\\n     ```python\\r\\n     import math\\r\\n     result = math.sqrt(16)\\r\\n     ```\\r\\n\\r\\nThis lesson covers some essential Python fundamentals. Feel free to explore Python further to build your programming skills.\\r\\n"
}
  


const initialState: IGlobalState = {

    mcq:sampleMcq,
    mcqLoading:false
}


export const globalSlice = createSlice({
    name:"global",
    initialState,
    reducers: {

        setMcq:(state, action:PayloadAction<IMCQResponse>) => {
            state.mcq = action.payload
        },
        setMcqLoading:(state, action:PayloadAction<boolean>) => {
            state.mcqLoading = action.payload
        }
    }
});


export const {setMcq, setMcqLoading} = globalSlice.actions
export default globalSlice.reducer








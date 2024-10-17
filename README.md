# String Calculator TDD Kata

This project is a solution to the **String Calculator TDD Kata** as part of the technical assessment for the Software Craftsperson position at **Incubyte**. The assessment demonstrates proficiency in Test-Driven Development (TDD) and writing clean, maintainable, and well-tested code.

## Table of Contents

- [Overview](#overview)
- [Project Setup](#project-setup)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Input Format](#input-format)
- [TDD Process](#tdd-process)
- [Benefits of TDD](#benefits-of-tdd)
- [License](#license)

## Overview

The goal of the **String Calculator** is to create a calculator that takes a string of comma-separated numbers and returns their sum. The project demonstrates implementing features via **Test-Driven Development (TDD)**, following the requirements provided in the assessment.

The application handles the following cases:
1. **Empty Input**: Returns `0`.
2. **Single Number**: Returns the number itself.
3. **Multiple Numbers**: Sums up comma-separated numbers.
4. **New Line Delimiters**: Supports newlines as delimiters between numbers.
5. **Custom Delimiters**: Allows users to define their own delimiters using the format `//[delimiter]\n[numbers]`.
6. **Negative Numbers**: Throws an exception with a message listing all negative numbers.

## Project Setup

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/)

### Installation

To set up the project locally, clone the repository and install the dependencies:

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd string-calculator-tdd

# Install dependencies
npm install
```

### Running the App

To start the application:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### Running Tests

To run the test cases for the `String Calculator` logic and ensure everything works as expected, execute the following command:

```bash
npm test
```

This command runs all the test cases using Jest and React Testing Library. You can view the results directly in the terminal, and it will display which tests passed or failed.

# Project Structure

The project is organized as follows:

```bash
├── src
│   ├── components
│   │   └── App.js               # Main React component for the calculator UI
│   ├── stringCalculator.js       # Core logic of the string calculator
│   ├── tests
│   │   └── stringCalculator.test.js  # Unit tests for string calculator
│   └── index.js                 # Entry point for the React app
├── public
│   └── index.html               # Static HTML template
├── package.json                 # Project dependencies and scripts
├── README.md                    # Project documentation (this file)
└── tailwind.config.js           # Tailwind CSS configuration
```

## Usage
The app provides a simple UI for inputting strings of numbers separated by commas, newlines, or custom delimiters. It calculates the sum and displays it on the screen.

-Enter a comma-separated string of numbers.
-Optionally, use a custom delimiter in the format //[delimiter]\n[numbers].
-Click Calculate to display the sum.
-In case of negative numbers, an error message will be shown listing the negative values.

## Input Format
The string calculator supports various input formats:

1. **Comma-Separated Numbers**: Input can include numbers separated by commas. For example:

```bash
"1,2,3" → 6
```

2. **Newline as a Delimiter**: You can use a newline (`\n`) as a delimiter. For example:
```bash
"1\n2,3" → 6
```

3. **Custom Delimiter**: If you want to specify a custom delimiter, input should follow the format `//[delimiter]\n[numbers]`. For example:
```bash
"//;\n1;2;3" → 6
```

4. **Negative Numbers**: If the input contains negative numbers, the calculator will throw an error, showing the negative numbers in the message:
```bash
"1,-2,3" → Error: "negative numbers not allowed -2"
```

5. **Empty Input**: An empty input string will return `0`.

### Features

- **Multiple Delimiters**: Handles both comma and newline as default delimiters.
- **Custom Delimiters**: Allows users to specify custom delimiters using the format `//[delimiter]\n[numbers]`.
- **Error Handling**: Throws an exception when negative numbers are present and lists all of them in the error message.
- **Scalable Input**: Handles an arbitrary number of inputs, supporting a wide range of values.

## Example Usage

- **With Comma Delimiter**:
```bash
Input: "1,2,3" Output: 6
```
- **With Newline Delimiter**:
```bash
Input: "1\n2,3" Output: 6
```
- **With Custom Delimiter**:
```bash
Input: "//;\n1;2;3" Output: 6
```
- **With Negative Numbers**:
```bash
Input: "1,-2,3" Output: Error: "negative numbers not allowed -2"
```
- **Empty Input**:
```bash
Input: "" Output: 0
```

## TDD Process

This project follows a **Test-Driven Development (TDD)** approach, ensuring that the development process revolves around writing tests first and implementing code to pass those tests.

## Steps in TDD

1. **Write a Test**: Start by writing a test that defines the desired functionality.
2. **Run the Test (Fail)**: The test should fail initially because no functionality has been implemented yet.
3. **Implement the Code**: Write the simplest code possible to make the test pass.
4. **Run the Test (Pass)**: Verify that the test passes with the implementation.
5. **Refactor**: Clean up the code while ensuring that all tests continue to pass.

### Example of TDD in Action

For a feature like adding numbers separated by a custom delimiter:

1. Write a test to expect the result for a custom delimiter (e.g., `//;\n1;2`).
2. Implement code to parse and handle the custom delimiter.
3. Run the test to ensure it passes.
4. Refactor if necessary, ensuring the test still passes.

## Benefits of TDD

- **Reduced Bugs**: Writing tests first helps identify and fix bugs early in the development process.
- **Confidence in Code**: With a comprehensive test suite, developers can refactor and modify code with confidence.
- **Improved Design**: TDD promotes cleaner, more modular, and maintainable code.

## License

This project is licensed under the MIT License.

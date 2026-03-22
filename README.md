@investorphem/string-tools

     


---

Description

@investorphem/string-tools is a robust and lightweight JavaScript utility library for common string operations. Designed for developers, it provides easy-to-use functions for capitalization, kebab-case conversion, reversing strings, and more.

Features

Capitalize the first letter of any string

Convert strings to kebab-case

Reverse strings efficiently

Lightweight and dependency-free

Fully automated GitHub Actions publishing workflow


Installation

npm install @investorphem/string-tools

Usage

const { capitalize, kebabCase, reverse } = require('@investorphem/string-tools');

console.log(capitalize('hello')); // Hello
console.log(kebabCase('Hello World')); // hello-world
console.log(reverse('abc')); // cba

API

capitalize(str)

Capitalizes the first character of a string.

Parameters:

str (string) – The string to capitalize


Returns:

(string) – Capitalized string


kebabCase(str)

Converts a string to kebab-case.

Parameters:

str (string) – The string to convert


Returns:

(string) – Kebab-case string


reverse(str)

Reverses the input string.

Parameters:

str (string) – The string to reverse


Returns:

(string) – Reversed string


Contributing

Contributions are welcome! Please fork the repo, make improvements, and submit a pull request. Make sure tests pass and code follows StandardJS style.

License

This project is licensed under the MIT License.

Badges Explained

npm version: Displays current package version on npm

npm downloads: Total downloads from npm registry

License: Shows the type of license

Build Status: GitHub Actions workflow status

JavaScript Style Guide: Shows code styling standard

Contributors: Number of contributors to the repo



---

Maintained by Oluwafemi Olagoke
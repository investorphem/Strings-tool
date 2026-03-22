# @investorphem/string-tools

[![npm version](https://img.shields.io/npm/v/@investorphem/string-tools.svg?style=flat-square)](https://www.npmjs.com/package/@investorphem/string-tools)
[![npm downloads](https://img.shields.io/npm/dm/@investorphem/string-tools.svg?style=flat-square)](https://www.npmjs.com/package/@investorphem/string-tools)
[![License](https://img.shields.io/npm/l/@investorphem/string-tools.svg?style=flat-square)](LICENSE)
[![Build Status](https://github.com/<your-username>/investorphem-string-tools/actions/workflows/publish.yml/badge.svg)](https://github.com/<your-username>/investorphem-string-tools/actions/workflows/publish.yml)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Contributors](https://img.shields.io/github/contributors/<your-username>/investorphem-string-tools.svg)](https://github.com/<your-username>/investorphem-string-tools/graphs/contributors)

---

## 🚀 Description

`@investorphem/string-tools` is a robust, lightweight, and production-ready JavaScript utility library for handling common string operations.

It is designed for developers who want **simple, fast, and dependency-free utilities** with **automated CI/CD publishing via GitHub Actions**.

---

## ✨ Features

* 🔠 Capitalize the first letter of any string
* 🔗 Convert strings to kebab-case
* 🔄 Reverse strings efficiently
* ⚡ Zero dependencies (lightweight)
* 🤖 Fully automated npm publishing with GitHub Actions
* 📦 Scoped package for better organization (`@investorphem/*`)

---

## 📦 Installation

```bash
npm install @investorphem/string-tools
```

---

## 🧠 Usage

```js
const { capitalize, kebabCase, reverse } = require('@investorphem/string-tools');

console.log(capitalize('hello')); // Hello
console.log(kebabCase('Hello World')); // hello-world
console.log(reverse('abc')); // cba
```

---

## 📚 API Reference

### `capitalize(str)`

Capitalizes the first character of a string.

**Parameters:**

* `str` *(string)* – The string to capitalize

**Returns:**

* *(string)* – Capitalized string

---

### `kebabCase(str)`

Converts a string to kebab-case.

**Parameters:**

* `str` *(string)* – The string to convert

**Returns:**

* *(string)* – Kebab-case string

---

### `reverse(str)`

Reverses the input string.

**Parameters:**

* `str` *(string)* – The string to reverse

**Returns:**

* *(string)* – Reversed string

---

## ⚙️ CI/CD (GitHub Actions)

This project is fully automated using GitHub Actions:

* On every push to `main`:

  * Version is automatically bumped (patch)
  * Package is published to npm

### ⚠️ Important Note

If publishing fails with:

```
403 Forbidden - You cannot publish over the previously published versions
```

It means:

* npm does **NOT allow publishing the same version twice**
* Ensure version is properly incremented before publishing

---

## 🛠️ Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

Make sure your code follows the [StandardJS style guide](https://standardjs.com).

---

## 📄 License

This project is licensed under the MIT License.

---

## 🏷️ Badges Explained

* **npm version** → Latest published version
* **npm downloads** → Monthly downloads count
* **License** → Project license
* **Build Status** → GitHub Actions workflow status
* **Code Style** → StandardJS compliance
* **Contributors** → Number of contributors

---

## 👨‍💻 Author

**Oluwafemi Olagoke**

---

## 🔥 Pro Tip

Always ensure your version changes before publishing. GitHub Actions handles this automatically, but if you manually publish, run:

```bash
npm version patch
```

before:

```bash
npm publish
```

---

⭐ If you find this package useful, consider giving the repo a star!

# ✨ create-rjx

> The most animated and modern CLI to generate a full-featured Express.js boilerplate — powered by RJ

[![NPM version](https://img.shields.io/npm/v/create-rjx?style=flat-square&color=crimson)](https://www.npmjs.com/package/create-rjx)
[![GitHub release](https://img.shields.io/github/v/release/softenrj/create-rjx?style=flat-square)](https://github.com/softenrj/create-rjx/releases)

---

## 🚀 What is `create-rjx`?

`create-rjx` is a highly animated, developer-friendly CLI tool to **instantly scaffold a modern Express.js app** in either **JavaScript or TypeScript** — with stylish console output, boilerplate magic, and a clean file structure to start building APIs faster than ever.

---

## 💾 Installation

You can install `create-rjx` globally via npm:

```bash
npm install -g create-rjx
```

Or use it directly with npx without installing:

```bash
npx create-rjx
```

---

## 🖥️ Usage

Run the CLI command:

```bash
create-rjx
```

or with a project name:

```bash
create-rjx my-api
```

You will be prompted to enter your project name and choose your preferred language (JavaScript or TypeScript). The CLI will then create a new project folder with the selected template.

---

## 🏁 Getting Started

After the project is created, navigate into your project directory and install dependencies:

```bash
cd your-project-name
npm install
npm run dev
```

This will start the development server and you can begin building your API.

---

## 🎯 Features

- ✨ Beautiful CLI animation using chalk-animation, figlet, and gradient-string
- ⚙️ Choose between JavaScript or TypeScript
- 📦 Comes pre-configured with:
  - Express.js
  - dotenv
  - nodemon
  - Proper scripts for dev/start/clean
- 🧱 Clean, modular file structure
- 🔗 Ready for real-world APIs

---

## 📂 Generated Project Structure

```
my-api/
├── src/
│   └── app.js / app.ts      # Main server entry
├── .env
├── package.json
└── README.md
```

---

## 🔧 Scripts

| Command       | Description                          |
| ------------- | ---------------------------------- |
| npm run dev   | Start in development mode           |
| npm start     | Start in production mode            |
| npm run clean | Clean node_modules & lock files     |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests on the [GitHub repository](https://github.com/softenrj/create-rjx).

---

## 💬 Support

If you have any questions or need help, please open an issue on the [GitHub repository](https://github.com/softenrj/create-rjx) or contact me on GitHub: [@softenrj](https://github.com/softenrj).

---

## 🧠 Tech Behind the Scenes

- chalk
- chalk-animation
- figlet
- gradient-string
- ora
- inquirer
- fs-extra

---

## ✍️ Made with ❤️ by Raj

Follow me on GitHub — I build cool tools like this:  
[github.com/softenrj](https://github.com/softenrj)

---

## 📄 License

MIT

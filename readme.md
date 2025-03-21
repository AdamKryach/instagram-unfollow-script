# Instagram Unfollow Script


Welcome to the **Instagram Unfollow Script**, an efficient tool developed by **te.bailo** to help you unfollow accounts on Instagram effortlessly. This script leverages **Puppeteer** for browser automation and includes advanced error handling, dynamic delays, and user-friendly interactions.

---

## 🚀 Features

- **Automated Unfollowing**: Automatically unfollow accounts on Instagram in bulk.
- **Node.js Compatibility**: Ensures smooth functionality with a robust Node.js-based setup.
- **Dynamic Navigation**: Lets you control the process and start when ready.
- **Retry Mechanism**: Ensures accounts are successfully unfollowed by verifying each action.
- **Scroll to Load More**: Handles Instagram's infinite scroll mechanism to process all accounts.
- **Polished User Interface**: Clean console logs with branding from **Wick Studio**.
- **Error Handling**: Handles unexpected errors gracefully and keeps the process running.
- **Batch Script Support**: Includes a `start.bat` file for easy setup and execution.

---

## 🛠 Prerequisites

Ensure the following tools are installed on your system:
1. **Node.js** (Download: [https://nodejs.org/](https://nodejs.org/))
2. **Git** (Optional for cloning the repository)

---

## 📂 Installation

Follow these steps to set up the script:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AdamKryach/instagram-unfollow-script.git
   cd instagram-unfollow-script
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Script**:
   - Use the provided `start.bat` for automated setup and execution:
     ```bash
     start.bat
     ```
   - Alternatively, run the script directly:
     ```bash
     node index.js
     ```

---

## 🎮 How to Use

1. Launch the script using `start.bat` or `node index.js`.
2. Enter your Instagram username when prompted.
3. Navigate to your **Following** page in the browser window that opens:
   ```
   https://www.instagram.com/<your-username>/following/
   ```
4. Press **Enter** in the terminal to start the unfollowing process.
5. Watch the script work its magic as it unfollows accounts efficiently!

---

## ✨ Highlights

### Professional Branding
This script is powered by **Wick Studio**, featuring:
- Polished console messages.
- Dynamic and visually appealing banners.

### Intelligent Automation
- Verifies each account's status after attempting to unfollow.
- Dynamically scrolls the page to load more accounts.

### Easy Setup
The `start.bat` script simplifies everything:
- Checks for Node.js.
- Installs required packages automatically.
- Runs the script seamlessly.

---

## ⚠️ Disclaimer

1. **Use Responsibly**: This script is designed for personal use only. Automating actions on Instagram may violate their terms of service, so proceed at your own risk.
2. **Rate Limits**: Avoid using the script excessively to prevent account restrictions or bans.
3. **Support**: For any issues, visit our community at [discord.gg/wicks](https://discord.gg/wicks).

---

## 📸 Screenshots

**Main Console Interface:**
```
=======================================================
      Black Cloud - Instagram Unfollow Script
=======================================================
                 github.com/AdamKryach
=======================================================

Checking for Node.js installation...
Node.js is installed! [OK]

Checking for required packages...
Required packages are already installed! [OK]

Starting the Instagram Unfollow Script...
=======================================================
```

---

## 🖥 Dependencies

This script uses the following Node.js packages:
- **[puppeteer](https://www.npmjs.com/package/puppeteer)**: Browser automation.
- **[chalk](https://www.npmjs.com/package/chalk)**: Console styling.
- **[figlet](https://www.npmjs.com/package/figlet)**: ASCII art for banners.
- **[readline](https://nodejs.org/api/readline.html)**: Command-line interactions.

---

## 🧑‍💻 Contribution

We welcome contributions to enhance this script! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a pull request on GitHub.

---

## 🌟 Acknowledgments

This project is brought to you by **Wick Studio**. Join our community for more tools, scripts, and support:
- **Discord**: [discord.gg/AdamKryach](https://discord.gg/AdamKryach)
- **GitHub**: [github.com/AdamKryach](https://github.com/AdamKryach)

---

## 🛡 License

This script is open-source and available under the [MIT License](LICENSE).

---

## 📞 Support

If you encounter any issues or have suggestions, feel free to:
- Open an issue on [GitHub](https://github.com/AdamKryach/instagram-unfollow-script/issues).
- Join our **Discord** at [discord.gg/AdamKryach](https://discord.gg/AdamKryach).

---

Crafted with ❤️ by **Black Cloud**  
Your go-to source for advanced tools and solutions!  

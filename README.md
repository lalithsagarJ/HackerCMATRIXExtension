# 🌈 Rainbow CMATRIX
### **Author : Lalith Sagar J**

## Description
*Rainbow CMATRIX* is a visually stunning implementation of the classic CMATRIX effect with a colorful twist. It creates a dynamic cascade of characters with a smooth rainbow gradient. The script also includes a customizable centered welcome message for an added personal touch.

---

## Features
- **Rainbow Characters** : Displays cascading characters in a beautiful rainbow gradient.
- **Customizable Welcome Message**: Displays a centered, bold, white welcome message (default: *"Hello Boss, Welcome Back"*).
- **Responsive Design** : Adapts dynamically to different screen sizes.
- **Smooth Animation** : Uses an HSL color gradient for fluid transitions and a fading trail effect for characters.

---

## Preview
[Rainbow CMATRIX Preview] 

<img width="1725" alt="image" src="https://github.com/user-attachments/assets/7873a24c-ff96-4e8c-9574-e4742b715506" />

---

## Installation

1. Clone the repository
2. Open Chrome and navigate to chrome://extensions/
3. Enable Developer mode (top-right corner)
4. Click Load unpacked and select the folder where you saved the extension (cloned path of this repository)
5. The extension will load, and you can toggle it on/off to see the changes
6. Enjoy the cool `cmatrix` effect

---

## Usage
- The welcome message can be customized in the `drawMessage` function within the script:
  ```
  const message = "Your Custom Message Here";
  ```

- The **cascading characters** can be adjusted by editing the `characters` string in the JavaScript:
  ```
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  ```

---

## Files
- `index.html`: The main HTML file to load the canvas and script.
- `styles.css`: Optional CSS for body styling.
- `script.js`: The JavaScript file that implements the Rainbow CMATRIX logic.

---

## How It Works
1. A `<canvas>` element is used to draw characters on the screen.
2. The script dynamically generates characters and assigns them colors based on an HSL gradient.
3. A central welcome message is displayed using the `drawMessage` function.
4. The script is responsive and adapts to browser resizing events.

---

## Contributing
Feel free to fork the repository and submit pull requests with improvements or new features.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments
Inspired by the classic CMATRIX screensaver and enhanced with modern JavaScript animations.

---

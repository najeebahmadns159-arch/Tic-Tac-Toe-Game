# 🎮 Tic Tac Toe — Classic Game, Modern UI

A fun and interactive **Tic Tac Toe** game built from scratch using **HTML, CSS, and JavaScript**.

This project takes the classic two-player Tic Tac Toe game and gives it a modern **neon-inspired interface**, smooth animations, winner detection, and draw detection.

> **Play. Think. Win. Repeat. 🔥**

---

## 📸 Game Preview

![Tic Tac Toe Game](screenshot.png)

---

## ✨ Features

### 🎯 Classic Two-Player Gameplay

Play against a friend on the same device. Players take turns placing **O** and **X** on the board.

### 🏆 Automatic Winner Detection

The game automatically checks all possible winning combinations after every move.

### 🤝 Draw Detection

If all nine boxes are filled and nobody has won, the game automatically detects the match as a draw.

### 🔄 Reset Game

Want to start over? The **Reset Game** button clears the board and starts a fresh match.

### 🆕 New Game

After a player wins or the game ends in a draw, you can start another match using the **New Game** button.

### 🎨 Modern UI

The game uses a dark neon-style interface with glowing colors, glass-like elements, hover effects, and animations.

### ⚡ Interactive Animations

Game pieces appear with a small pop animation, while buttons and boxes have interactive hover and click effects.

---

## 🧠 How the Game Works

The game board contains **9 boxes**, represented using JavaScript.

Each time a player clicks a box:

```text
Player O → Move
      ↓
Player X → Move
      ↓
Check Winner
      ↓
Check Draw
      ↓
Continue Game
```

The game stores whose turn it is using a simple JavaScript variable:

```javascript
let turnO = true;
```

When a player makes a move, the game checks the predefined winning patterns such as:

```text
[0, 1, 2]    [0, 3, 6]    [0, 4, 8]
[1, 4, 7]    [2, 5, 8]    [2, 4, 6]
[3, 4, 5]    [6, 7, 8]
```

If the three positions contain the same symbol, that player wins.

---

## 🛠️ Technologies Used

| Technology     | Purpose                                         |
| -------------- | ----------------------------------------------- |
| **HTML5**      | Creates the game structure                      |
| **CSS3**       | Handles styling, layout, animations and effects |
| **JavaScript** | Controls game logic and user interaction        |

No external libraries, frameworks, or dependencies are used.

---

## 📋 Requirements

You don't need to install anything to run this project.

All you need is:

* 🌐 A modern web browser
* 💻 A computer or laptop
* No external libraries
* No frameworks
* No backend
* No database

The game runs completely in the browser using **client-side JavaScript**.

---

## 🚀 How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone <your-repository-url>
```

### 2️⃣ Open the Project

Navigate to the project folder:

```bash
cd Tic-Tac-Toe
```

### 3️⃣ Run the Game

Simply open:

```text
index.html
```

in your browser.

That's it! 🎮

---

## 📁 Project Structure

```text
Tic-Tac-Toe/
│
├── index.html       # Game structure
├── style.css        # Styling and animations
├── app.js           # Game logic
├── screenshot.png   # Game preview
└── README.md        # Project documentation
```

---

## 🎮 How to Play

1. **Player O** starts the game.
2. Click on any empty box to place your symbol.
3. **Player X** gets the next turn.
4. Continue taking turns.
5. Get **three symbols in a row** to win.
6. If all boxes are filled without a winner, the game is a **draw**.
7. Use **Reset Game** or **New Game** to start again.

### 🏆 Winning Conditions

You can win by getting three symbols:

* Horizontally →
* Vertically ↓
* Diagonally ↘

---

## 💡 What I Learned From This Project

Building this project helped me practice several important frontend and JavaScript concepts:

* DOM manipulation
* `querySelector()` and `querySelectorAll()`
* JavaScript event listeners
* `forEach()` loops
* Arrays and nested arrays
* Conditional statements
* Functions
* CSS classes and `classList`
* Game state management
* Basic problem-solving and logic building
* CSS animations and transitions

Most importantly, this project helped me understand how **JavaScript can interact with HTML elements through the DOM** to create an interactive application.

---

## 🔮 Future Improvements

Some features that could be added in the future:

* 🤖 Single-player mode with AI
* 🧠 Different difficulty levels
* 🏅 Score tracking
* 🌙 Light/Dark mode
* 🔊 Sound effects
* 📱 Improved mobile experience
* 🎉 Winning animation
* 💾 Store scores using Local Storage

---

## 👨‍💻 Author

### **Najeeb**

Built with ❤️, JavaScript, and a lot of debugging.

> **"Every expert was once a beginner who kept building." 🚀**

---

## ⭐ If You Like It

If you found this project interesting, consider giving the repository a ⭐ on GitHub!

Thanks for checking out my project! 🎮

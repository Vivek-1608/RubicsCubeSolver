# 🧊 Rubik's Cube Solver

A web-based Rubik’s Cube solver that takes a scrambled cube state and returns a step-by-step solution using Kociemba’s two-phase algorithm.

> 🚀 Built using Node.js, Express, HTML, CSS, and Java for solving logic.

---

## 🎯 Features

- ✅ Input any 54-character Rubik’s Cube state string
- 🎯 Validates whether the cube is already solved
- 📦 Uses Kociemba’s Two-Phase Algorithm (via Java)
- 🧠 Outputs optimal solving moves
- 🎨 Visual 3D-style cube representation
- 🔁 Reset and solve functionality
- 💡 Clean and interactive UI

---

## 🧪 Example

**Input:**

DUUBULDBFRBFRRULLLBRDFFFBLURDBFDFDRFRULBLUFDURRBLBDUDL

**Output:**

👉 Solution: U' F2 R' F2 R D2 R' B2 U B2 R2 D R B R D2 R'

If cube is already solved:

🎉 Cube is already solved!

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js + Express
- **Solver**: Java (Kociemba’s Two-Phase Algorithm)
- **Deployment**: Localhost / Render (optional)

---

## 📁 Project Structure

rubiks-cube-solver/
│
├── backend/  
│ ├── SolverRunner.java # Runs Java Kociemba solver  
│ ├── twophase.jar # Compiled Kociemba algorithm  
│  
├── public/  
│ ├── index.html # Frontend UI  
│ ├── style.css # Styling  
│ ├── script.js # UI logic + solver trigger  
│  
├── server.js # Express server  
├── package.json # Node dependencies  
├── .gitignore # Git exclusions  
└── README.md # This file  

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repo  
git clone https://github.com/your-username/rubiks-cube-solver.git  
cd rubiks-cube-solver  
2. Install Node.js dependencies  
npm install  
3. Make sure Java is installed  
java -version  
If not installed, download from: https://www.oracle.com/java/technologies/javase-downloads.html  
4. Run the server  
node server.js  
Visit: http://localhost:3000  

🌐 Deployment Notes  
☁️ Render doesn’t support Java natively. To deploy:  
Use Docker OR  
Replace Java backend with a JavaScript-based solver (recommended)  

🙌 Credits  
Kociemba’s Two-Phase Algorithm  
Cube color logic adapted from World Cube Association  

📜 License  
MIT License  

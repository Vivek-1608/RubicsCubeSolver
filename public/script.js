const faceOrder = ['U', 'R', 'F', 'D', 'L', 'B'];
const colorMap = {
  U: '#ffffff', // white
  R: '#ff0000', // red
  F: '#00ff00', // green
  D: '#ffff00', // yellow
  L: '#ffa500', // orange
  B: '#0000ff'  // blue
};

async function solve() {
  const scrambleInput = document.getElementById("scramble");
  const scramble = scrambleInput.value.trim().toUpperCase();
  const solutionEl = document.getElementById("solution");
  const cubeEl = document.getElementById("cube");

  solutionEl.classList.remove("show");
  solutionEl.textContent = "Solving...";
  cubeEl.innerHTML = ''; // Clear old visual

  renderCube(scramble); // ✅ Visualize cube

  try {
    const response = await fetch("/solve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scramble })
    });

    const data = await response.json();

    let displayText = "";
    if (data.solution === "") {
      displayText = "🎉 Cube is already solved!";
    } else if (data.solution) {
      const steps = data.solution.trim().split(/\s+/);
      displayText = "👉 Solution: " + steps.join(" ");
    } else {
      displayText = "❌ No solution received.";
    }

    solutionEl.textContent = displayText;
    setTimeout(() => solutionEl.classList.add("show"), 10);
  } catch (err) {
    solutionEl.textContent = "🚫 Error solving the cube.";
    console.error(err);
  }
}

function reset() {
  document.getElementById("scramble").value = "";
  document.getElementById("solution").textContent = "";
  document.getElementById("solution").classList.remove("show");
  document.getElementById("cube").innerHTML = "";
}

function renderCube(cubeString) {
  const cube = document.getElementById('cube');
  cube.innerHTML = ''; // Clear previous

  let idx = 0;
  for (const face of faceOrder) {
    const faceDiv = document.createElement('div');
    faceDiv.className = `face ${face}`;

    for (let i = 0; i < 9; i++) {
      const color = colorMap[cubeString[idx]] || '#222';
      const cell = document.createElement('div');
      cell.style.backgroundColor = color;
      faceDiv.appendChild(cell);
      idx++;
    }

    cube.appendChild(faceDiv);
  }
}

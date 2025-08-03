const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/solve', (req, res) => {
    const scramble = req.body.scramble;

    const java = spawn('java', ['-cp', 'backend/twophase.jar;.', 'backend.SolverRunner', scramble]);

    let result = '';
    java.stdout.on('data', (data) => {
        result += data.toString();
    });

    java.stderr.on('data', (data) => {
        console.error(`Error: ${data}`);
    });

    java.on('close', (code) => {
        res.json({ solution: result.trim() });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

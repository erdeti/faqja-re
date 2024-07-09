const puzzle = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const initialClues = [
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8],
    [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8],
    [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8],
    [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8],
    [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8],
    [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8],
    [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8],
    [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8],
    [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8]
];

// Shuffle the array to randomly distribute the known numbers
for (let i = initialClues.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [initialClues[i], initialClues[j]] = [initialClues[j], initialClues[i]];
}

const clues = initialClues.slice(0, 65);  // Take 65 known numbers

// Clear the puzzle, then set only the known numbers
const puzzleWithClues = Array(9).fill(null).map(() => Array(9).fill(null));
clues.forEach(([row, col]) => {
    puzzleWithClues[row][col] = puzzle[row][col];
});

const sudokuContainer = document.getElementById('sudoku-container');
const timerElement = document.getElementById('timer');
const messageElement = document.getElementById('message');
let startTime;
let timerInterval;

function createSudokuGrid() {
    puzzleWithClues.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (value !== null) {
                cell.classList.add('fixed');
                cell.textContent = value;
            } else {
                const input = document.createElement('input');
                input.type = 'number';
                input.min = 1;
                input.max = 9;
                input.addEventListener('input', () => {
                    input.value = input.value.slice(-1); // Limit input to one character
                    checkPuzzle();
                });
                cell.appendChild(input);
            }
            sudokuContainer.appendChild(cell);
        });
    });
}

function startTimer() {
    startTime = new Date().getTime();
    timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = now - startTime;
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        timerElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function checkPuzzle() {
    let isFilled = true;
    let isSolved = true;

    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
        for (let colIndex = 0; colIndex < 9; colIndex++) {
            const input = sudokuContainer.children[rowIndex * 9 + colIndex].querySelector('input');
            if (puzzleWithClues[rowIndex][colIndex] === null) {
                if (!input.value) {
                    isFilled = false;
                } else if (parseInt(input.value) !== puzzle[rowIndex][colIndex]) {
                    isSolved = false;
                }
            }
        }
    }

    if (isFilled && isSolved) {
        stopTimer();
        displayResult();
    }
}

function displayResult() {
    const now = new Date().getTime();
    const elapsed = now - startTime;
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));

    if (minutes < 2) {
        messageElement.textContent = 'Category: Wifey';
    } else if (minutes < 4) {
        messageElement.textContent = 'Category: Girlfriend';
    } else {
        messageElement.textContent = 'Category: Shoqe';
    }

    setTimeout(() => {
        window.location.href = 'tulipanet.htm';
    }, 10000);
}

createSudokuGrid();
startTimer();
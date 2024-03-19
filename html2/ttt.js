var restartb = document.querySelector('#b');
var cells = document.querySelectorAll('td');
var currentPlayer = 'X'; // Initial player is 'X'
var gameActive = true;

function clearAllCells() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
    gameActive = true;
}

restartb.addEventListener('click', clearAllCells);

function checkWin() {
    var winningConditions = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // First column
        [1, 4, 7], // Second column
        [2, 5, 8], // Third column
        [0, 4, 8], // Diagonal from top-left
        [2, 4, 6]  // Diagonal from top-right
    ];

    for (var i = 0; i < winningConditions.length; i++) {
        var [a, b, c] = winningConditions[i];
        if (cells[a].textContent !== '' && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return true; // Winning condition met
        }
    }

    // Check for tie
    var tie = true;
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].textContent === '') {
            tie = false; // If any cell is empty, it's not a tie
            break;
        }
    }
    if (tie) {
        alert("It's a tie!");
        gameActive = false;
    }

    return false;
}

function changeContent() {
    if (gameActive && this.textContent === '') {
        this.textContent = currentPlayer; // Set content to current player
        if (checkWin()) {
            alert(currentPlayer + " wins!");
            gameActive = false;
        } else {
            // Toggle players
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', changeContent);
}

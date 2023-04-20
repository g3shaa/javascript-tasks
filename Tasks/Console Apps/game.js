function demo(input) {
 
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]
    ];
 
    let playerX = 0;
    let playerO = 0;
 
    for (let i = 0; i < input.length; i++) {
 
        let move = input[i].split(' ').map((el) => Number(el));
        let row = move.shift();
        let indexOfRow = move.shift();
        let counter = 0;
 
        if (playerX == i) {
 
            if (dashboard[row][indexOfRow] == false) {
                dashboard[row].splice(indexOfRow, 1, 'X');
                playerO = playerX + 1;
 
            } else {
                console.log('This place is already taken. Please choose another!');
                for (let j = i; j < input.length; j++) {
 
                    let move = input[j].split(' ').map((el) => Number(el));
                    let row = move.shift();
                    let indexOfRow = move.shift();
 
                    if (dashboard[row][indexOfRow] == false) {
                        dashboard[row].splice(indexOfRow, 1, 'X');
                        i = j;
                        playerO = i + 1;
                        break;
                    } else {
                        continue;
                    }
                }
            }
        } else if (playerO == i) {
 
            if (dashboard[row][indexOfRow] == false) {
                dashboard[row].splice(indexOfRow, 1, 'O');
                playerX = playerO + 1;
 
            } else {
                console.log('This place is already taken. Please choose another!');
                for (let j = i; j < input.length; j++) {
 
                    let move = input[j].split(' ').map((el) => Number(el));
                    let row = move.shift();
                    let indexOfRow = move.shift();
 
                    if (dashboard[row][indexOfRow] == false) {
                        dashboard[row].splice(indexOfRow, 1, 'O');
                        i = j;
                        playerX = i + 1;
                        break;
                    } else {
                        continue;
                    }
                }
            }
        }
 
        for (let i = 0; i < dashboard.length; i++) {
            let currRow = dashboard[i];
            for (let el of currRow) {
                if (el != false) {
                    counter++;
                }
            }
        }
 
        if (counter == 9) {
            console.log('The game ended! Nobody wins :(');
            dashboard.forEach((el) => console.log(el.join('\t')));
            return;
        }
 
        if (dashboard[0][0] == 'X' && dashboard[0][1] == 'X' && dashboard[0][2] == 'X') {               // cheching every row for a winner
            console.log('Player X wins!');
            dashboard.forEach((el) => console.log(el.join('\t')));
            return;
        } else if (dashboard[1][0] == 'X' && dashboard[1][1] == 'X' && dashboard[1][2] == 'X') {
            console.log('Player X wins!');
            dashboard.forEach((el) => console.log(el.join('\t')));
            return;
        } else if (dashboard[2][0] == 'X' && dashboard[2][1] == 'X' && dashboard[2][2] == 'X') {
            console.log('Player X wins!');
            dashboard.forEach((el) => console.log(el.join('\t')));
            return;
        } else if (dashboard[0][0] == 'O' && dashboard[0][1] == 'O' && dashboard[0][2] == 'O') {
            console.log('Player O wins!');
            dashboard.forEach((el) => console.log(el.join('\t')));
            return;
        } else if (dashboard[1][0] == 'O' && dashboard[1][1] == 'O' && dashboard[1][2] == 'O') {
            console.log('Player O wins!');
            dashboard.forEach((el) => console.log(el.join('\t')));
            return;
        } else if (dashboard[2][0] == 'O' && dashboard[2][1] == 'O' && dashboard[2][2] == 'O') {
            console.log('Player O wins!');
            dashboard.forEach((el) => console.log(el.join('\t')));
            return;
        } else if (dashboard[0][0] == 'X' && dashboard[1][0] == 'X' && dashboard[2][0] == 'X') {         // checking every column for a winner
            console.log('Player X wins!');
            dashboard.forEach((el) => console.log(el.join('\t')));
            return;
        } else if (dashboard[0][1] == 'X' && dashboard[1][1] == 'X' && dashboard[2][1] == 'X') {
            console.log('Player X wins!');
            dashboard.forEach((el) => console.log(el.join('\t')));
            return;
        } else if (dashboard[0][2] == 'X' && dashboard[1][2] == 'X' && dashboard[2][2] == 'X') {
            console.log('Player X wins!');
            dashboard.forEach((el) => console.log(el.join('\t')));
            return;
        } else if (dashboard[0][0] == 'O' && dashboard[1][0] == 'O' && dashboard[2][0] == 'O') {
            console.log('Player O wins!');
            dashboard.forEach((el) => console.log(el.join('\t')));
            return;
        } else if (dashboard[0][1] == 'O' && dashboard[1][1] == 'O' && dashboard[2][1] == 'O') {
            console.log('Player O wins!');
            dashboard.forEach((el) => console.log(el.join('\t')));
            return;
        } else if (dashboard[0][2] == 'O' && dashboard[1][2] == 'O' && dashboard[2][2] == 'O') {
            console.log('Player O wins!');
            dashboard.forEach((el) => console.log(el.join('\t')));
            return;
        } else if (dashboard[0][0] == 'X' && dashboard[1][1] == 'X' && dashboard[2][2] == 'X') {        // checking diagonals
            console.log('Player X wins!');
            dashboard.forEach((el) => console.log(el.join('\t')));
            return;
        } else if (dashboard[0][0] == 'O' && dashboard[1][1] == 'O' && dashboard[2][2] == 'O') {
            console.log('Player O wins!');
            dashboard.forEach((el) => console.log(el.join('\t')));
            return;
        }
    }
 
}

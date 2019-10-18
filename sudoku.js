var sodokulist = [
    [2, 0, 3, 0, 0, 8, 6, 0, 7],
    [1, 4, 0, 7, 2, 6, 0, 0, 9],
    [5, 0, 7, 1, 3, 9, 4, 2, 8],
    [0, 2, 5, 0, 8, 1, 9, 0, 4],
    [4, 1, 0, 9, 0, 3, 2, 0, 5],
    [0, 7, 9, 2, 0, 5, 0, 3, 6],
    [6, 0, 2, 0, 1, 0, 0, 9, 3],
    [7, 0, 0, 5, 0, 2, 0, 0, 1],
    [0, 8, 1, 3, 6, 7, 0, 4, 0]
];

function Sudoku_Game(sodokulist) {
    var index = nextsudoku_game(sodokulist);
    var first = index[0];
    var secound = index[1];

    if (first === -1) {
        return sodokulist;
    };
    
    var newList = main_function(first, secound, sodokulist);

    for (var k = 0; k < newList.length && nextsudoku_game(sodokulist)[0] !== -1; k++) {
        sodokulist[first][secound] = newList[k];
        Sudoku_Game(sodokulist);
    }

    if (nextsudoku_game(sodokulist)[0] !== -1) sodokulist[r][c] = 0;   

    return sodokulist;
}

function nextsudoku_game(sodokulist) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (sodokulist[i][j] === 0) return [i, j];
        }
    }
    return [-1, -1];
}

function main_function(r, c, sodokulist) {
    var possArr = [];
    var row = [];
    var col = [];
    var quad = [];
    var k = 0;
    var l = 0;
    if (r <= 2) k = 0; else if (r <= 5) k = 3; else k = 6;
    if (c <= 2) l = 0; else if (c <= 5) l = 3; else l = 6;

    for (var i = 0; i < 9; i++) {
        row.push(sodokulist[i][c]);
    }

    for (var j = 0; j < 9; j++) {
        col.push(sodokulist[r][j]);
    }

    for (var i = k; i < k + 3; i++) {
        for (var j = l; j < l + 3; j++) {
            quad.push(sodokulist[i][j]);
        }
    }

    for (var n = 1; n < 10; n++) {
        if (row.indexOf(n) === -1 && col.indexOf(n) === -1 && quad.indexOf(n) === -1) {
            possArr.push(n);
        }
    }
    return possArr;
}

function checkQuadrant(r, c, sodokulist) {
    var qudarantArr = [];
    for (var i = r; i < r + 3; i++) {
        for (var j = c; j < c + 3; j++) {
            if (qudarantArr.indexOf(sodokulist[i][j]) === -1 || sodokulist[i][j] === 0) {
                qudarantArr.push(sodokulist[i][j]);
            } else {
                return false;
            }
        }
    }
}
Sudoku_Game(sodokulist);
console.log('Solved');
console.log(sodokulist);
console.log("Great")

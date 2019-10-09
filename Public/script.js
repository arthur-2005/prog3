
let matrix = [];
let side = 20;
let grassArr = [];
let grassEaterArr = [];
let grassgishatichArr = []
let mardArr =[];
let tankArr = []

function setup() {
    matrixGenerator(35, 100, 80, 60, 15, 30);
    frameRate(8);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('grey');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass);
            }
            if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            }
            if (matrix[y][x] == 3) {
                let grassgishatich = new GrassGishatich(x, y);
                grassgishatichArr.push(grassgishatich);
            }
            if (matrix[y][x] == 4) {
                let mard= new Mard(x, y);
                mardArr.push(mard);
            }
            if (matrix[y][x] == 5) {
                let tank= new Tank(x, y);
                tankArr.push(tank);
            }
        }
    }
    function matrixGenerator(matrixSize, grass , grassEater,  grassgishatich,mard,tank){
        for (let i = 0; i < matrixSize; i++) {
           matrix[i] = [];
            for (let o = 0; o < matrixSize; o++) {
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grass; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 1;
        }
        for (let i = 0; i < grassEater; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 2;
        }
        for (let i = 0; i < grassgishatich; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 3;
        }
        for (let i = 0; i < mard; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 4;
        }
        for (let i = 0; i < tank; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 5;
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("grey");
            }
            else if (matrix[y][x] == 2) {
                fill("orange");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("violet");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            rect(x * side, y * side, side, side);
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in grassgishatichArr) {
        grassgishatichArr[i].eat();
    }
    for (var i in mardArr) {
        mardArr[i].mul();
    }
    for (var i in tankArr) {
        tankArr[i].eat();
    }
}

//! Setup function fires automatically
function setup() {

    var socket = io();
    var side = 30;
    var matrix = [];
    var grass;


    //! Getting DOM objects (HTML elements)
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let vorsordCountElement = document.getElementById('vorsordCountElement');
    let gishatichCountElement = document.getElementById('gishatichCountElement');
    let mahCountElement = document.getElementById('mahCountElement');
    let grassqanak =  document.getElementById('grassqanak');
    let xotakerqanak= document.getElementById('xotakerqanak');
    let gishatichnerqanak= document.getElementById('gishatichnerqanak');
    let vorsordqanak= document.getElementById('vorsordqanak');
    let mahqanak= document.getElementById('mahqanak');


    var seasonText = document.getElementById("season")

    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        console.log(data.grassArr.length);
        season = data.season;
        matrix = data.matrix;
        grassqanak.innerText = data.grassArr.length;
        xotakerqanak.innerText  = data.xotakerner.length;
        gishatichnerqanak.innerText = data.gishatichner.length;
        vorsordqanak.innerHTML  = data.vorsord.length;
        mahqanak.innerText = data.mah.length;

        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        gishatichCountElement.innerText = data.gishatichCounter;
        vorsordCountElement.innerText = data.vorsordCounter;
        mahCountElement.innerText = data.mahCounter;

        createCanvas(matrix[0].length * side, matrix.length * side)

        background('#acacac');

        if (season == "spring") {

            seasonText.innerHTML = "Spring"

        }
        else if (season == "autumn") {

            seasonText.innerHTML = "Autumn"
        }
        else if (season == "summer") {

            seasonText.innerHTML = "Summer"
        }
        else if (season == "winter") {

            seasonText.innerHTML = "Winter"
        }





        if (season == "winter") {

            for (var y = 0; y < matrix.length; y++) {

                for (var x = 0; x < matrix[y].length; x++) {
                    if (matrix[y][x] == 1) {
                        fill("white");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 0) {
                        fill("#acacac");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 2) {
                        fill("#ccff66");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 3) {
                        fill("#33cccc");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 4) {
                        fill("#999966");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 5) {
                        fill("black");
                        rect(x * side, y * side, side, side);
                    }
                }
            }

        }
        else if (season == "spring") {

            for (var y = 0; y < matrix.length; y++) {

                for (var x = 0; x < matrix[y].length; x++) {
                    if (matrix[y][x] == 1) {
                        fill("green");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 0) {
                        fill("#acacac");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 2) {
                        fill("yellow");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 3) {
                        fill("red");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 4) {
                        fill("brown");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 5) {
                        fill("black");
                        rect(x * side, y * side, side, side);
                    }
                }
            }
        }
        else if (season == "summer") {

            for (var y = 0; y < matrix.length; y++) {

                for (var x = 0; x < matrix[y].length; x++) {
                    if (matrix[y][x] == 1) {
                        fill("green");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 0) {
                        fill("#acacac");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 2) {
                        fill("yellow");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 3) {
                        fill("red");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 4) {
                        fill("brown");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 5) {
                        fill("black");
                        rect(x * side, y * side, side, side);
                    }
                }
            }
        }
        else if (season == "autumn") {

            for (var y = 0; y < matrix.length; y++) {

                for (var x = 0; x < matrix[y].length; x++) {
                    if (matrix[y][x] == 1) {
                        fill("#ff9900");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 0) {
                        fill("#acacac");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 2) {
                        fill("yellow");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 3) {
                        fill("red");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 4) {
                        fill("brown");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 5) {
                        fill("black");
                        rect(x * side, y * side, side, side);
                    }
                }
            }
        }
        else {
            for (var y = 0; y < matrix.length; y++) {

                for (var x = 0; x < matrix[y].length; x++) {
                    if (matrix[y][x] == 1) {
                        fill("green");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 0) {
                        fill("#acacac");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 2) {
                        fill("yellow");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 3) {
                        fill("red");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 4) {
                        fill("brown");
                        rect(x * side, y * side, side, side);
                    }
                    else if (matrix[y][x] == 5) {
                        fill("black");
                        rect(x * side, y * side, side, side);
                    }
                }
            }
        }
    }
}

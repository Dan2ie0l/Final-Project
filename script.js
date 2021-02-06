//! Setup function fires automatically
function setup() {

    var socket = io();
    var side = 10;
    var matrix = [];



    //! Getting DOM objects (HTML elements)
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let vorsordCountElement = document.getElementById('vorsordCountElement');
    let gishatichCountElement = document.getElementById('gishatichCountElement');
    let mahCountElement = document.getElementById('mahCountElement');
    let dragonCountElement = document.getElementById('dragonCountElement');
    let grassqanak = document.getElementById('grassqanak');
    let xotakerqanak = document.getElementById('xotakerqanak');
    let gishatichnerqanak = document.getElementById('gishatichnerqanak');
    let vorsordqanak = document.getElementById('vorsordqanak');
    let mahqanak = document.getElementById('mahqanak');
    let dragonqanak = document.getElementById('dragonqanak');
    let lifeqanak = document.getElementById('lifeqanak');

    var seasonText = document.getElementById("season")

    socket.on("data", drawCreatures);

    function drawCreatures(data) {

        season = data.season;
        matrix = data.matrix;
        grassqanak.innerText = data.grassArr.length;
        xotakerqanak.innerText = data.xotakerner.length;
        gishatichnerqanak.innerText = data.gishatichner.length;
        vorsordqanak.innerHTML = data.vorsord.length;
        mahqanak.innerText = data.mah.length;
        dragonqanak.innerText = data.dragons.length;
        lifeqanak.innerText = data.kyanq.length;

        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        gishatichCountElement.innerText = data.gishatichCounter;
        vorsordCountElement.innerText = data.vorsordCounter;
        mahCountElement.innerText = data.mahCounter;
        dragonCountElement.innerText = data.dragonCounter;
        lifeCountElement.innerText = data.liveCounter;

        createCanvas(matrix[0].length * side + 1, matrix.length * side)

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


        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {

                if (matrix[y][x] == 0) {
                    fill("#acacac");
                }
                else if (matrix[y][x] == 1) {
                    if (season == "spring")
                        fill("#bfff00");
                    else if (season == "summer")
                        fill("green");
                    else if (season == "autumn")
                        fill("#008000");
                    else if (season == "winter")
                        fill("#b3ffb3");
                }
                else if (matrix[y][x] == 2) {
                    if (season == "spring")
                        fill("yellow");
                    else if (season == "summer")
                        fill("yellow");
                    else if (season == "autumn")
                        fill("#cccc00");
                    else if (season == "winter")
                        fill("#ffff99");
                }
                else if (matrix[y][x] == 3) {
                    if (season == "spring")
                        fill("#ff5c33");
                    else if (season == "summer")
                        fill("red");
                    else if (season == "autumn")
                        fill("#991f00");
                    else if (season == "winter")
                        fill("#ffad99");
                }
                else if (matrix[y][x] == 4) {
                    if (season == "spring")
                        fill("brown");
                    else if (season == "summer")
                        fill("brown");
                    else if (season == "autumn")
                        fill("#ff5500");
                    else if (season == "winter")
                        fill("#ffad99");
                }
                else if (matrix[y][x] == 5) {
                    fill("black");
                }
                else if (matrix[y][x] == 6) {
                    if (season == "spring")
                        fill("#008080");
                    else if (season == "summer")
                        fill("aqua");
                    else if (season == "autumn")
                        fill("aqua");
                    else if (season == "winter")
                        fill("#ccffff");
                }
                else if (matrix[y][x] == 7) {
                    fill("white");
                }
                

                rect(x * side, y * side, side, side);
            }
        }





    }
}

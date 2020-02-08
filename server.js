var Grass = require("./Modules/class.grass.js");
var Xotaker = require("./Modules/class.xotaker.js");
var Gishatich = require("./Modules/class.gishatich.js");
var Vorsord = require("./Modules/class.vorsord.js");
var Mah = require("./Modules/class.mah.js");
var Dragon = require("./Modules/class.dragon.js");
let random = require('./Modules/random.js');

// arrays
grassArr = [];
gishatichner = [];
xotakerner = [];
dragons = [];
vorsord = [];
mahh = [];
grassHashiv = 0;
xotakerhashiv = 0;
gishatichhashiv = 0;
vorsordhashiv = 0;
mahhashiv = 0;
dragonshashiv = 0;


matrix = [];
var season = '';


// end 



//matrix generating
function matrixGenerator(matrixSize, grass, xotakerner, gishatichner, vorsord, mahh, dragons) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize)); // 0-9
        let customY = Math.floor(random(matrixSize)); // 4
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < xotakerner; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < gishatichner; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < vorsord; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < mahh; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
    for (let i = 0; i < dragons; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 6;
    }
}
matrixGenerator(20, 10, 2, 2, 3, 3, 4);
//end


var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);


//
function creatingobjects() {

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {

            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y, 1));
                grassHashiv++;

            }
            else if (matrix[y][x] == 2) {
                xotakerner.push(new Xotaker(x, y, 2));
                xotakerhashiv++;
            }
            else if (matrix[y][x] == 3) {
                gishatichner.push(new Gishatich(x, y, 3));
                gishatichhashiv++;
            }
            else if (matrix[y][x] == 4) {
                vorsord.push(new Vorsord(x, y, 4));
                vorsordhashiv++;

            }
            else if (matrix[y][x] == 5) {
                mahh.push(new Mah(x, y, 5));
                mahhashiv++;

            }
            else if (matrix[y][x] == 6) {
                dragons.push(new Dragon(x, y, 6));
                dragonshashiv++;

            }

        }
    }


}

creatingobjects();

io.on("connection", function (socket) {
    socket.on("light", function () {
        let rx = Math.floor(random(30));
        let ry = Math.floor(random(30));
        for (var y = 0; y < 30; y++) {
            for (var x = 0; x < 30; x++) {
                if ((y + x) == (ry + rx) || (y - x) == (ry - rx) || (x == rx && (y == ry - 5 || y == ry + 5)) || (y == ry && (x == rx - 5 || x == rx + 5))) {
                    if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                        if (matrix[y][x] == 1) {
                            for (var i in grassArr) {
                                if (x == grassArr[i].x && y == grassArr[i].y) {
                                    grassArr.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 2) {
                            for (var i in xotakerner) {
                                if (x == xotakerner[i].x && y == xotakerner[i].y) {
                                    xotakerner.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 3) {
                            for (var i in gishatichner) {
                                if (x == gishatichner[i].x && y == gishatichner[i].y) {
                                    gishatichner.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 4) {
                            for (var i in vorsord) {
                                if (x == vorsord[i].x && y == vorsord[i].y) {
                                    vorsord.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        
                        matrix[y][x] = 7;
                    }
                }
            }
        }
    })
    socket.on("boom", function () {
        let rx = Math.floor(random(30));
        let ry = Math.floor(random(30));
        for (var y = 0; y < 30; y++) {
            for (var x = 0; x < 30; x++) {
                if (((y == ry || y == ry - 1 || y == ry + 1) && (x == rx - 1 || x == rx - 2 || x == rx - 3 || x == rx + 1 || x == rx + 2 || x == rx + 3)) || ((x == rx || x == rx - 1 || x == rx + 1) && (y == ry - 1 || y == ry - 2 || y == ry - 3 || y == ry + 1 || y == ry + 2 || y == ry + 3)) || ((y == ry - 2 || y == ry + 2) && (x == rx - 2 || x == rx + 2)) || ((y == ry - 3 || y == ry + 3) && (x == rx - 3 || x == rx + 3)) || ((y == ry - 4 || y == ry + 4) && (x == rx - 4 || x == rx + 4))) {
                    if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                        if (matrix[y][x] == 1) {
                            for (var i in grassArr) {
                                if (x == grassArr[i].x && y == grassArr[i].y) {
                                    grassArr.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 2) {
                            for (var i in xotakerner) {
                                if (x == xotakerner[i].x && y == xotakerner[i].y) {
                                    xotakerner.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 3) {
                            for (var i in gishatichner) {
                                if (x == gishatichner[i].x && y == gishatichner[i].y) {
                                    gishatichner.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 4) {
                            for (var i in vorsord) {
                                if (x == vorsord[i].x && y == vorsord[i].y) {
                                    vorsord.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 6) {
                            for (var i in dragons) {
                                if (x == dragons[i].x && y == dragons[i].y) {
                                    dragons.splice(i, 1);
                                    break;
                                }
                            }
                        }
                       
                        matrix[y][x] = 8;
                    }
                }
            }
        }
    })



});
var z;
function game() {


    z++;
    if (z >= 0 && z < 10) {
        season = "spring";
    }
    else if (z >= 10 && z < 20) {
        season = "autumn"

    }
    else if (z >= 20 && z < 30) {
        season = "summer"

    }
    else if (z >= 30 && z <= 40) {
        season = "winter"
    } else {
        z = 0
    }


    for (var i in grassArr) {

    }
    for (var i in vorsord) {
        vorsord[i].eat();

        if (vorsord[i].energy >= 10) {
            vorsord[i].bazmanal();
        }
        else if (vorsord[i].energy <= 0) {
            vorsord[i].mahanal(i);
        }

    }
    for (var i in gishatichner) {
        gishatichner[i].eat();

        if (gishatichner[i].energy >= 12) {
            gishatichner[i].bazmanal()
        }
        else if (gishatichner[i].energy <= 0) {
            gishatichner[i].mahanal(i)
        }
    }
    for (var i in xotakerner) {
        xotakerner[i].eat();


        if (xotakerner[i].energy >= 10) {
            xotakerner[i].bazmanal();
        }
        else if (xotakerner[i].energy <= 0) {

            xotakerner[i].mahanal(i);
        }
    }

    for (var i in mahh) {
        mahh[i].eat();

        if (mahh[i].energy >= 18) {
            mahh[i].bazmanal()
        }
        else if (mahh[i].energy <= 0) {
            mahh[i].mahanal(i)
        }

    }
    for (var i in dragons) {
        dragons[i].eat();

        if (dragons[i].energy >= 10) {
            dragons[i].bazmanal()
        }
        else if (dragons[i].energy <= 0) {
            dragons[i].mahanal(i)
        }

    }





    //! Object to send
    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        season: season,
        grassEaterCounter: xotakerhashiv,
        gishatichCounter: gishatichhashiv,
        vorsordCounter: vorsordhashiv,
        mahCounter: mahhashiv,
        dragonCounter: dragonshashiv,
        grassArr: grassArr,
        gishatichner: gishatichner,
        xotakerner: xotakerner,
        vorsord: vorsord,
        dragons: dragons,
        mah: mahh
    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);


}

setInterval(game, 1000)
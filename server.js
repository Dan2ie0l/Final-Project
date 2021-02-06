var Grass = require("./Modules/class.grass.js");
var Xotaker = require("./Modules/class.xotaker.js");
var Gishatich = require("./Modules/class.gishatich.js");
var Vorsord = require("./Modules/class.vorsord.js");
var Mah = require("./Modules/class.mah.js");
var Dragon = require("./Modules/class.dragon.js");
var Life = require("./Modules/class.kyanq.js")
let random = require('./Modules/random.js');

// arrays
grassArr = [];
gishatichner = [];
xotakerner = [];
dragons = [];
vorsord = [];
mahh = [];
kyanq = [];
grassHashiv = 0;
xotakerhashiv = 0;
gishatichhashiv = 0;
vorsordhashiv = 0;
mahhashiv = 0;
dragonshashiv = 0;
kyanqhashiv = 0;


matrix = [];
var season = '';


// end 



//matrix generating
function matrixGenerator(matrixSize, grass, xotakerner, gishatichner, vorsord, mahh, dragons, kyanq) {
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
    for (let i = 0; i < kyanq; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 7;

    }

}
matrixGenerator(100, 2, 2, 2, 2, 2, 2, 2);
//end


var express = require('express');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const { setupMaster } = require("cluster");
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
                grassArr.push(new Grass(x, y, 1))
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


            else if (matrix[y][x] == 7) {
                kyanq.push(new Life(x, y, 7));
                kyanqhashiv++;


            }


        }
    }
}

creatingobjects();






let z;
function game() {


    z++;
    if (z >= 0 && z < 20) {
        season = "spring";
    }
    else if (z >= 20 && z < 40) {
        season = "autumn"

    }
    else if (z >= 40 && z < 60) {
        season = "summer"

    }
    else if (z >= 60 && z <= 80) {
        season = "winter"
    } else {
        z = 0
        
    }


    for (var i in grassArr) {
        if (season !== "winter" ) {
            grassArr[i].bazmanal();
        }
    

    }
    for (var i in vorsord) {
        vorsord[i].eat();

        if (vorsord[i].energy >= 10 && season !== "winter") {
            vorsord[i].bazmanal();
        }
        else if (vorsord[i].energy <= 0) {
            vorsord[i].mahanal(i);
        }

    }
    for (var i in gishatichner) {
        gishatichner[i].eat();

        if (gishatichner[i].energy >= 10 && season !== "winter") {
            gishatichner[i].bazmanal()
        }
        else if (gishatichner[i].energy <= 0) {
            gishatichner[i].mahanal(i)
        }
    }
    for (var i in xotakerner) {
        xotakerner[i].eat();


        if (xotakerner[i].energy >= 10 && season !== "winter" ) {
            xotakerner[i].bazmanal();
        }
        else if (xotakerner[i].energy <= 0) {

            xotakerner[i].mahanal(i);
        }
    }
    for (var i in mahh) {
        mahh[i].eat();

        if (mahh[i].energy >= 10) {
            mahh[i].bazmanal()
        }
        else if (mahh[i].energy <= 0) {
            mahh[i].mahanal(i)
        }

    }
    for (var i in dragons) {
        dragons[i].eat();

        if (dragons[i].energy >= 8 && season !== "winter") {
            dragons[i].bazmanal()
        }
        else if (dragons[i].energy <= 0) {
            dragons[i].mahanal(i)
        }
    }
    for (var i in kyanq) {
        kyanq[i].eat();

        if (kyanq[i].energy >= 10 && season !== "winter" ) {
            kyanq[i].bazmanal()
        }
        else if (kyanq[i].energy <= 0) {
            kyanq[i].mahanal(i)
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
        liveCounter: kyanqhashiv,
        grassArr: grassArr,
        gishatichner: gishatichner,
        xotakerner: xotakerner,
        vorsord: vorsord,
        dragons: dragons,
        mah: mahh,
        kyanq: kyanq
    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);


}

setInterval(game, 1000);
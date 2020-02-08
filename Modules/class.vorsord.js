var KendaniEak = require("./kendanieak");
var random = require("./random.js");

module.exports = class Vorsord extends KendaniEak {
  constructor(x, y, index) {
    super(x, y, index)
    this.tariq = 0
  }
  stanalNorKordinatner() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1]
    ];
  }
  yntrelVandak(ch) {
    this.stanalNorKordinatner();
    return super.yntrelVandak(ch);
  }
  sharjvel() {
    this.stanalNorKordinatner();
    var datarkvandakner = this.yntrelVandak(0);
    var norvandak = random(datarkvandakner);
    if (norvandak) {
      matrix[this.y][this.x] = 0;
      matrix[norvandak[1]][norvandak[0]] = 4;
      this.x = norvandak[0];
      this.y = norvandak[1];
      this.energy--;
    }
  }
  eat() {
    this.stanalNorKordinatner();
    var datarkvandakner = this.yntrelVandak(3);
    var norvandak = random(datarkvandakner);

    if (norvandak) {
      matrix[this.y][this.x] = 0;
      matrix[norvandak[1]][norvandak[0]] = 4;
      this.x = norvandak[0];
      this.y = norvandak[1];
      this.energy + 2;
      for (var c in gishatichner) {

        if (gishatichner[c].x == this.x && gishatichner[c].y == this.y) {
          gishatichner.splice(c, 1);
          break;
        }
      }
    }
    else {
      this.sharjvel();
    }
  }
  bazmanal() {
    this.energy = 10;
    var norVandak = random(this.yntrelVandak(0));
    if (norVandak ) {
      var vorso = new Vorsord(norVandak[0], norVandak[1]);
      vorsord.push(vorsord);
      matrix[norVandak[1]][norVandak[0]] = 4;
    }
  }
  mahanal(i) {
    matrix[this.y][this.x] = 0;
    if (this.energy = 5) {
      vorsord.splice(i, 1)
      break;
    }


  }
}


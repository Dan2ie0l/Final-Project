var KendaniEak = require("./kendanieak");
var random = require("./random.js");

module.exports = class Gishatich extends KendaniEak {
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
      matrix[norvandak[1]][norvandak[0]] = 3;
      this.x = norvandak[0];
      this.y = norvandak[1];
      this.energy--;
    }
  }
  eat() {
    this.stanalNorKordinatner();
    var datarkvandakner = this.yntrelVandak(2);
    var norvandak = random(datarkvandakner);
    if (norvandak) {
      matrix[this.y][this.x] = 0;
      matrix[norvandak[1]][norvandak[0]] = 3;
      this.x = norvandak[0];
      this.y = norvandak[1];
      this.energy++;
      for (var c in xotakerner) {

        if (xotakerner[c].x == this.x && xotakerner[c].y == this.y) {
          xotakerner.splice(c, 1);

          break;
        }
      }
    }
    else {
      this.sharjvel();
    }
  }

  bazmanal() {
    this.energy = 20;
    var norVandak = random(this.yntrelVandak(0));
    if (norVandak) {
      var gishatich = new Gishatich(norVandak[0], norVandak[1]);
      gishatichner.push(gishatich);
      matrix[norVandak[1]][norVandak[0]] = 3;
    }
  }
  mahanal(i) {
    matrix[this.y][this.x] = 0;
    if (this.energy = 6) {
      gishatichner.splice(i, 1);
      
    }
    

  }

}




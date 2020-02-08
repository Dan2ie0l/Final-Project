var KendaniEak = require("./kendanieak");
var random = require("./random.js");

module.exports = class Dragon extends KendaniEak {
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
      matrix[norvandak[1]][norvandak[0]] = 6;
      this.x = norvandak[0];
      this.y = norvandak[1];
      this.energy--;
    }
  }
  eat() {
    this.stanalNorKordinatner();
    var datarkvandakner = this.yntrelVandak(4);
    var norvandak = random(datarkvandakner);
    if (norvandak) {
      matrix[this.y][this.x] = 0;
      matrix[norvandak[1]][norvandak[0]] = 6;
      this.x = norvandak[0];
      this.y = norvandak[1];
      this.energy++;
      for (var c in vorsord) {

        if (vorsord[c].x == this.x && vorsord[c].y == this.y) {
          vorsord.splice(c, 1);

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
    if (norVandak ) {
      var dragon = new Dragon(norVandak[0], norVandak[1]);
      dragons.push(dragon);
      matrix[norVandak[1]][norVandak[0]] = 6;
    }
  }
  mahanal(i) {
    matrix[this.y][this.x] = 0;
    if (this.energy = 6) {
      dragons.splice(i, 1);
      break;
    }


  }

}




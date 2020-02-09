var KendaniEak = require("./kendanieak");
var random = require("./random.js");

module.exports = class Life extends KendaniEak {
  constructor(x, y, index) {
    super(x, y, index)
   
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
      matrix[norvandak[1]][norvandak[0]] = 7;
      this.x = norvandak[0];
      this.y = norvandak[1];
      this.energy--;
    }
  }
  eat() {
    this.stanalNorKordinatner();
    var datarkvandakner = this.yntrelVandak(5);
    var norvandak = random(datarkvandakner);
    if (norvandak) {
      matrix[this.y][this.x] = 0;
      matrix[norvandak[1]][norvandak[0]] = 7;
      this.x = norvandak[0];
      this.y = norvandak[1];
      this.energy++;
      for (var c in mahh) {

        if (mahh[c].x == this.x && mahh[c].y == this.y) {
          mahh.splice(c, 1);

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
      var live = new Life(norVandak[0], norVandak[1]);
      kyanq.push(live);
      matrix[norVandak[1]][norVandak[0]] = 7;
    }
  }
  mahanal(i) {
    matrix[this.y][this.x] = 0;
    if (this.energy = 6) {
      kyanq.splice(i, 1);
      break;
    }


  }

}


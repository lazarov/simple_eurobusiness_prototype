var blueHouse = { color: "blue", price: 20, charge: 40 };
var redHouse = { color: "red", price: 40, charge: 80 };

function House(player, type) {
  this.player = player;
  this.type = type;
}

House.prototype.getColor = function() {
  return this.type.color;
}

House.prototype.charge = function(player) {
  player.funds =- this.type.charge;
}

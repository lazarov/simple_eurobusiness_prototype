var blueHouse = { price: 20, charge: 40 };
var redHouse = { price: 40, charge: 80 };

function House(player, type) {
  this.player = player;
  this.type = type;
}

House.prototype.charge = function(player) {
  player.funds =- this.type.charge;
}

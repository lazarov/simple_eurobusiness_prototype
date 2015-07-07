function Field(id, name) {
  this.id = id;
  this.name = name;
  this.houses = [];
}

Field.prototype.hasHouses = function() {
  this.houses.length > 0;
}

Field.prototype.getHousesByPlayer = function(player) {
  var userHouses = [];

  this.houses.forEach(function(house) {
    if (house.player.id == player.id)
      userHouses.push(house);
  });

  return userHouses;
}

Field.prototype.getHousesByColor = function(color) {
  var colorHouses = [];

  this.houses.forEach(function(house) {
    if (house.getColor() == color)
      colorHouses.push(house);
  });

  return colorHouses;
}

Field.prototype.addHouse = function(house) {
  this.houses.push(house);
}

Field.prototype.removeHouse = function(house) {
  var length = houses.length;

  for(var i = length; i--;) {
    if(houses[i] === house) {
      houses.splice(i, 1);
      return;
    }
  }
}

function addRedHouse(player) {
  var redButton = document.getElementById("red_house");
  var myHouse = document.createElement("div");
  myHouse.setAttribute("class", "red_house");
  redButton.onclick = function () {
    document.getElementById(player.currentPosition).appendChild(myHouse);
  }
}

function addBlueHouse(player) {
  var blueButton = document.getElementById("blue_house");
  var myHouse = document.createElement("div");
  myHouse.setAttribute("class", "blue_house");
  blueButton.onclick = function () {
    document.getElementById(player.currentPosition).appendChild(myHouse);
  }
}

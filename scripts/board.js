var BOARD = (function() {

  FIELDS = [
    { id: 0, name: "start"},
    { id: 1, name: "FIELD 1"},
    { id: 2, name: "FIELD 2"},
    { id: 3, name: "FIELD 3"},
    { id: 4, name: "FIELD 4"},
    { id: 5, name: "FIELD 5"},
    { id: 6, name: "FIELD 6"},
    { id: 7, name: "FIELD 7"},
    { id: 8, name: "JAIL"},
    { id: 9, name: "FIELD 9"},
    { id: 10, name: "FIELD 10"},
    { id: 11, name: "FIELD 11"},
    { id: 12, name: "FIELD 12"},
    { id: 13, name: "FIELD 13"},
    { id: 14, name: "FIELD 14"},
    { id: 15, name: "FIELD 15"},
    { id: 16, name: "FIELD 16"},
    { id: 17, name: "FIELD 17"},
    { id: 18, name: "FIELD 18"},
    { id: 19, name: "FIELD 19"},
    { id: 20, name: "FIELD 20"},
    { id: 21, name: "FIELD 21"},
    { id: 22, name: "FIELD 22"},
    { id: 23, name: "FIELD 23"},
    { id: 24, name: "FIELD 24"},
    { id: 25, name: "FIELD 25"},
    { id: 26, name: "FIELD 26"},
    { id: 27, name: "FIELD 27"},
    { id: 28, name: "FIELD 28"},
    { id: 29, name: "FIELD 29"},
  ]

  var fields = [];
  var self = {};

  self.getField = function(id) {
    var found;

    fields.some(function(item) {
      if (item.id == id) {
        found = item;
        return true;
      }
      return false;
    })

    return found;
  }

  self.init = function() {
    FIELDS.forEach(function(item) {
      var field = new Field(item.id, item.name);
      fields.push(field);
    });
  }

  return self;
}());


function Field(id, name) {
  this.id = id;
  this.name = name;
  this.houses = [];
}

Field.prototype.hasHouses = function() {
  this.houses.length > 0;
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

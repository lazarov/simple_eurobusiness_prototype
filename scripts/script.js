var Game = {  MAX_DICE: 11,
              BoardSize: 30,
              LapBonus: 200,
              playerIdTurn: 0,
              players: [ player1, player2 ]
            }


var Board = [];

function Field(id) {
  this.id = id;
}

Field.prototype.addHotel = function(hotel) {
  hotels.push(hotel);
}


var hotel_blue = { price: 20, charge: 40 };
var hotel_red = { price: 40, charge: 80 };

function hotel(color, charge, price) {
  this.color = color;
  this.charge = charge;
  this.price = price;
}


function Player(id, name, funds, lastRoll, currentPosition, currentLap) {
  this.id = id;
  this.name = name;
  this.funds = funds;
  this.lastRoll = lastRoll;
  this.currentPosition = currentPosition;
  this.currentLap = currentLap;
}

Player.prototype.draw = function() {
  return Math.floor(Math.random() * Game.MAX_DICE + 2);
};

Player.prototype.lap = function () {
    if (this.currentPosition + this.lastRoll > Game.BoardSize) {
    this.currentPosition = this.currentPosition - Game.BoardSize;
    this.currentLap = this.currentLap + 1;
    this.funds = this.funds + Game.LapBonus;
  }
};

Player.prototype.charge = function () {
  this.funds = this.funds - charge;
}

Player.prototype.display = function () {
  var fundS = document.getElementById(this.name + "_funds");
  fundS.innerHTML = this.funds;
  var showLap = document.getElementById(this.name + "_currentLap");
  showLap.innerHTML = this.currentLap;
  var showPosition = document.getElementById(this.name +"_position");
  showPosition.innerHTML = this.currentPosition;
  var showLastRoll = document.getElementById(this.name + "_last_Roll");
  showLastRoll.innerHTML = this.lastRoll;
};

Player.prototype.roll = function() {
  console.log(this);
  this.lastRoll = this.draw();
  this.lap();
  this.currentPosition = this.currentPosition + this.lastRoll;
  document.getElementById(this.currentPosition).appendChild(document.getElementById(this.name));
  player2.display();
  player1.display();
  switch_players();
};

var player1 = new Player(1, "player1", 1000, 0, 0, 0);
var player2 = new Player(2, "player2", 1000, 0, 0, 0);

players = [ player1, player2 ];

function switch_players() {
  var rollButtons = document.getElementsByName('roll');

  if (rollButtons[0].className == 'hide') {
    rollButtons[1].className = 'hide';
    rollButtons[0].className = '';
  } else {
    rollButtons[1].className = '';
    rollButtons[0].className = 'hide'
  }
}

function change_player1() {
  var players = [player1, player2]
  if (players[0] == 'player1') {

  }
}


function rollHandler(player) {
  return function() { player.roll() };
}

function init() {
  var rollButtons = document.getElementsByName("roll");

  for (var i = 0; i < rollButtons.length; i++){
    rollButtons[i].onclick = rollHandler(players[i]);
  }
}


window.onload = init;

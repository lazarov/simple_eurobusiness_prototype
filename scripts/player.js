DAYS_IN_JAIL = 3

function Player(id, name, funds, lastRoll, currentPosition, currentLap, inJail, daysInJail) {
  this.id = id;
  this.name = name;
  this.funds = funds;
  this.lastRoll = lastRoll;
  this.currentPosition = currentPosition;
  this.currentLap = currentLap;
  this.inJail = inJail;
  this.daysInJail = daysInJail;
  this.skipLaps = 0;
}

Player.prototype.draw = function() {
  return Math.floor(Math.random() * Game.MAX_DICE + 2);
};

Player.prototype.lap = function () {
    if (this.currentPosition + this.lastRoll >= Game.BoardSize) {
    this.currentPosition = this.currentPosition - Game.BoardSize;
    this.currentLap = this.currentLap + 1;
    this.funds = this.funds + Game.LapBonus;
  }
};

Player.prototype.charge = function (charge) {
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

Player.prototype.move = function() {
  document.getElementById(this.currentPosition).appendChild(document.getElementById(this.name));
}

Player.prototype.arrested = function() {
  var messageDisplay = document.getElementById(this.name + "_message");
  messageDisplay.innerHTML = "You are in jail!";
  document.getElementById(this.name + "_rollButton").value = "Pass";
}

Player.prototype.noMessage = function() {
  var messageDisplay = document.getElementById(this.name + "_message");
  messageDisplay.innerHTML = "";
  document.getElementById(this.name + "_rollButton").value = "Roll";
}

Player.prototype.positionCtrl = function() {
    if (this.currentPosition != 8) {
      this.currentPosition = this.currentPosition + this.lastRoll;
    } else if (this.currentPosition === 8 && this.inJail === false) {
      this.inJail = true;
      this.arrested();
      this.daysInJail = DAYS_IN_JAIL;
      this.currentPosition = this.currentPosition + 0;
    } else if (this.inJail === true && this.daysInJail != 0) {
      this.daysInJail -= 1;
    } else if (this.inJail === true && this.daysInJail === 0) {
      this.inJail = false;
      this.currentPosition = this.currentPosition + this.lastRoll;
      this.noMessage();
    }
}

Player.prototype.roll = function() {
  this.lastRoll = this.draw();
  this.lap();
  this.positionCtrl();
  this.move();
};

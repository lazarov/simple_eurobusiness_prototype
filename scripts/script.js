
// *********************** GAME *********************************
var Game = {  MAX_DICE: 11,
              BoardSize: 30,
              LapBonus: 200,
              playerIdTurn: 0,
              players: [ player1, player2 ]
            }

// ************************* PLAYER ******************************

var player1 = new Player(1, "player1", 1000, 0, 0, 0, false, 0);
var player2 = new Player(2, "player2", 1000, 0, 0, 0, false, 0);

// ***************** PAWN MOVE CONTROL *******************

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
  return function() {
    player.roll()
    player2.display();
    player1.display();
    switch_players();
    showBuyHouseBox();
  };
}

function showBuyHouseBox() {
  var buyHouseBox = document.getElementById('buy_house');
  buyHouseBox.className = "";
}

function init() {
  BOARD.init();

  var rollButtons = document.getElementsByName("roll");

  for (var i = 0; i < rollButtons.length; i++){
    rollButtons[i].onclick = rollHandler(players[i]);
  }
}


window.onload = init;

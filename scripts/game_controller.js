var GAME_CONTROLLER = (function(board, players) {
  var self = {};

  self.rollHandler = function(player) {
    return function() {
      player.roll();

      var position = player.currentPosition;
      var field = board.getField(position);

      if (field.hasHouses()) {
        // check if can build any house (max 2 red and max 2 blue)
          // check if oponent have any color houses
            //check if we can build house of given color (max 2 )
            // build house

        // charge player
      }

      player2.display();
      player1.display();
      switch_players();
      showBuyHouseBox();
    };
  }

  self.init = function() {
    var rollButtons = document.getElementsByName("roll");

    for (var i = 0; i < rollButtons.length; i++){
      rollButtons[i].onclick = self.rollHandler(players[i]);
    }
  }

  self.showBuyHouse = function() {
    var buyHouseBox = document.getElementById('buy_house');
    buyHouseBox.className = "";
  }

  return self;
}(BOARD, players));

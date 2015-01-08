"use strict";
var playState = {
  createPlayer: function () {
    this.player = new creatures.Player(game, 10, 10, "player1", 15);
    this.player.x = 10;
    this.player.y = 10;
  },
  loadWorld: function () {
  
  },
  create: function() { 
    this.createPlayer();
    this.loadWorld();
  },

  update: function() {

  },
};
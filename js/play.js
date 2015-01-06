"use strict";
var playState = {
  createPlayer: function () {
    this.player = new creatures.Creature(game, 10, 10, undefined, "arcade", undefined);
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
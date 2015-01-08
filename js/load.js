"use strict";
var loadState = {

  preload: function () {		
    // Add a loading label 
    var loadingLabel = game.add.text(game.world.centerX, 150, "loading...", { font: "30px Arial", fill: "#ffffff" });
    loadingLabel.anchor.setTo(0.5, 0.5);

    // Add a progress bar
    var progressBar = game.add.sprite(game.world.centerX, 200, "progressBar");
    progressBar.anchor.setTo(0.5, 0.5);
    game.load.setPreloadSprite(progressBar);
    // Load all assets
      //SpriteSheets
      game.load.spritesheet("mute", "assets/muteButton.png", 28, 22);
      game.load.spritesheet("player1", "assets/p1_spritesheet.png", 72, 97);
    // ...
  },

  create: function() { 
    game.state.start("menu");
  }
};
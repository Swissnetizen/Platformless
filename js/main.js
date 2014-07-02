requirejs.config({
  paths: {
    "bower": "../bower_components",
    "c": "../bower_components/crafty/dist/crafty",
    "statsJS": "../bower_components/stats.js/src/Stats"
  },
  shim: {
    "statsJS": {
       exports: "Stats"
    }
  }
});
require(["c", "gamepad", "AI", "platform", "wasd", "stats"], function () {
  "use strict";
  //Initialising the game
  Crafty.init(600, 600, document.getElementById('game'));
  //Creating Entities
  //A wall
  //STATS:
  Crafty.e("DisplayStats");
  window.onresize
  var floor = Crafty.e("2D, Canvas, Color, Platform, Solid, Collision")
    .attr({x: 0, y: 250, w: 250, h: 10})
    .color("green");
  var plat = Crafty.e("2D, Canvas, Color, Platform, Plat1, Collision")
    .attr({x: 250, y: 250, w: 250, h: 10})
    .Plat1(true);
  //The player
  var player = Crafty.e("Creature, 2D, Canvas, Color, Moving, Collision, Solid, GamepadPlatControl, WASDControls")
  .attr({
    x: 0, 
    y: 230,
    w: 20, 
    h: 40,
    speed: {
      x: 4,
      y: 5
    },
    stopOnSolids: true
  })
  .collision()
  .color('#F0F')
//  .fourway({x: 5, y: 6})
  .creature(1, 3, "P1")

  .gamepad();
  //Two identical enemies 
  /*
  var enemy = Crafty.e("Creature, 2D, Canvas, Color, Hostile, Collision, Solid")
  .attr({x: 20, y: 60, w: 20, h: 20})
  .collision()
  .color("#00F")
  .creature(1, 1, "Bluey");
  var enemy2 = Crafty.e("Creature, 2D, Canvas, Color, Hostile, Collision, Solid")
  .attr({x: 100, y: 60, w: 20, h: 20})
  .color("#0F0")
  .creature(1, 1, "Greenie")
  .collision();
  */
});


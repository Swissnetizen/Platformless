requirejs.config({
  paths: {
    bower: "../bower_components",
    c: "../bower_components/crafty/dist/crafty"
  }
});
require(["c", "gamepad", "AI", "platform"], function () {
  "use strict";
  //Initialising the game
  Crafty.init(600, 600, document.getElementById('game'));
  //Creating Entities
  //A wall
  window.onresize
  var floor = Crafty.e("Wall, 2D, Canvas, Color, Floor, Solid, Collision")
    .attr({x: 0, y: 250, w: 250, h: 10})
    .color("green");
  var lava = Crafty.e("Wall, 2D, Canvas, Color, Floor, Solid, Lava, Collision")
    .attr({x: 250, y: 500, w: 250, h: 10})
    .color("red");
  //The player
  var player = Crafty.e("Creature, 2D, Canvas, Color, Moving, Collision, Solid, GamepadPlatControl")
  .attr({x: 0, y: 2, w: 20, h: 20})
  .collision()
  .color('#F0F')
//  .fourway({x: 5, y: 6})
  .creature(1, 3, "P1")
  .moving({x: 3, y: 5}, true)
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


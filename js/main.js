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
require(["c", "gamepad", "AI", "platform", "wasd", "stats", "movingplat"], function () {
  "use strict";
  //Initialising the game
  Crafty.init(window.innerWidth, window.innerHeight, document.getElementById('game'));
  //Creating Entities
  //A wall
  //STATS:
  Crafty.e("DisplayStats");
  window.onresize
  var floor = Crafty.e("2D, Canvas, Color, Solid, Collision")
    .attr({x: 0, y: 250, w: 250, h: 10})
    .color("green");
  Crafty.e("2D, Canvas, Color, Plat1, Collision")
    .attr({x: 250, y: 250, w: 250, h: 10})
    .Plat1(true);
  Crafty.e("2D, Canvas, Color, Plat2, Collision")
    .attr({x: 500, y: 250, w: 250, h: 10})
    .Plat2(false);
  Crafty.e("2D, Canvas, MovingPlat, Color, Collision")
    .attr({
      //Position and size
      x: 750, y: 500, w: 250, h: 10,
      //Start and end for moving plat
      reversing: true, start: {x: 0, y: 0}, end: {x: 750, y: 500}
    }).color("#00CCCC");
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

});

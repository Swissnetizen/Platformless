define(["c", "moving"], function (require) {
  "use strict";
  Crafty.c("WASDControls", {
    init: function () {
      this.requires("Moving, Keyboard");
      this.bind("RenderScene", this._onRenderScene);
      this.bind("KeyDown", this._onKeyDown);
      this.bind("KeyUp", this._onKeyUp);
    },
    wasd: function (speed) {
      this.moving(speed);
      return this;
    },
    _onRenderScene: function () {
      var x = 0,
          y = 0;
          // GO LEFT
      if (this.isDown("A")) {
        x = -1;
      } 
      //GO RIGHT
      if (this.isDown("D")) {
        x = 1;
      }
      //JUMP
      if (this.isDown("SPACE")) {
        y = 1;
      }
      //ACTIVATE MOVEMENT
      this.move(x, y);
    },
    _onKeyDown: function (e) {
      //PLATFORM 1
      var keys = Crafty.keys;
      
      console.log("KEYDOWN")
      if (e.key === keys.Q) {
        Crafty.trigger("P1Change");
      }
      //PLATFORM 2
      if (e.key === keys.E) {
        Crafty.trigger("P2Change");
      }
    },
    _onKeyUp: function (e) {
      //PLATFORM 1
      var keys = Crafty.keys;
      if (e.key === keys.Q) {
        Crafty.trigger("P1Change");
      }
      //PLATFORM 2
      if (e.key === keys.E) {
        Crafty.trigger("P2Change");
      }
    }
  });
});
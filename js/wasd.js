
define(["c", "moving"], function (require) {
  "use strict";
  Crafty.c("WASDControls", {
    init: function () {
      this.requires("Moving, Keyboard, Mouse, Delay");
      this.bind("RenderScene", this._onRenderScene);
      // window.addEventListener("click", this._onMouseChange);
      window.addEventListener("mousedown", this._onMouseChange);
      window.addEventListener("mouseup", this._onMouseChange);
      this.bind("KeyUp", this._onMouseChange);
      this.bind("KeyDown", this._onMouseChange);
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
        y = -1;
      }
      //ACTIVATE MOVEMENT
      this.move(x, y);
    },
    _onMouseChange: function (e) {
      //PLATFORM 1
      var b = Crafty.mouseButtons,
          k = Crafty.keys;
      console.log("MOSUE CHANGE")
      if (e.mouseButton === b.LEFT || e.key === k.Q) {
        Crafty.trigger("P1Change");
      }
      //PLATFORM 2?
      if (e.mouseButton === b.RIGHT || e.key === k.E) {
        Crafty.trigger("P2Change");
      }
    }
  });
});

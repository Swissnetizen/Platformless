Crafty.c("GamepadPlatControl", {
  init: function () {
    this.requires("Moving");
    window.addEventListener("gamepadconnected", this._onGamepadConnect.bind(this));
  },
  gamepad: function () {
    this.bind("RenderScene", this._onRenderScene);
    return this;
  },
  _onGamepadConnect: function (e) {
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index, e.gamepad.id,
    e.gamepad.buttons.length, e.gamepad.axes.length);
    this.gamepad = e.gamepad;
    console.dir(e.gamepad);
    this.connected = true;
    this.trigger("gamepadConnected", e.gamepad);
  },
  _onRenderScene: function () {
    if (!this.connected) return;
    var buttons = this.gamepad.buttons,
      axes = this.gamepad.axes;
      x = 0, y = 0;
      //Jump
    if (buttons[1].pressed) {
      y = 1;
    }
    if (button[0].pressed) Crafty.trigger("P1Change");
    if (button[2].pressed) Crafty.trigger("P2Change");
    if (button[3].pressed) Crafty.trigger("MChange");
    //axes horizontal
    if (axes[1] > .5) {
      x = -axes[1];
    } else if(axes[1] < -.5) {
      x= -axes[1];
    }
    this.move(x, y);
  }
});
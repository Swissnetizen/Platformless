Crafty.c("PlatN", {
  PlatN: function (n) {
    this.state = true;
    this.requires("Color");
    this.bind("P" + n + "Change", this._onPNChange.bind(this));
    this.color
  },
  _onPNChange: function () {
    this.state = !state;
    if (this.state) {
      this.addComponent("Solid");
      this.color("")
    }
    this.removeComponent("Solid");
    this.color()
  }
});
define(["c"], function (require) {
  Crafty.c("PlatN", {
    PlatN: function (n, active) {
      this.protruding = true;
      this.requires("Color");
      this.addComponent("Solid");
      this.bind("P" + n + "Change", this._onPNChange.bind(this));
      //Does it start retracted?
      if (active === false) {
        this.protruding = active;
        this.removeComponent("Solid");
      }
      //Select Colour pallete
      if (n === 1) {
        this.colorValues = {
          primary: "#0000FF",
          secondary: "#0000CC"
        }
      } else if (n === 2) {
        this.colorValues = {
          primary: "#FF0000",
          secondary: "#CC0000"
        }
      }
      this.color(this.colorValues.primary);
    },
    _onPNChange: function () {
      this.protruding = !protruding;
      if (this.protruding) {
        this.addComponent("Solid");
        this.color(this.colorValues.primary);
      } else {
        this.removeComponent("Solid");
        this.color(this.colorValues.secondary);
      }
    }
  });
  //Shorter functions to init the top one
  //Plat1
  Crafty.c("Plat1", {
    Plat1: function (active) {
      this.addComponent("PlatN");
      this.PlatN(1, active);
    }
  });
  Crafty.c("Plat2", {
    Plat2: function () {
      this.addComponent("PlatN");
      this.PlatN(2);
    }
  });
});
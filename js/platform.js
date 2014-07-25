define(["c"], function (require) {
  //General function to define different platforms
  Crafty.c("PlatN", {
    init: function () {
      //Define setters
      Object.defineProperties(this,{
        "platformNumber": {
          get: function () {
            return this._platformNumber;
          },
          set: this._platformNumberChanged
        },
        "active": {
          set: this._activeChanged,
          get: function () {
            return this._active;
          },
        }
      });
      //Set active to true.
      //Default
      this.platformNumber = 1;
      this.active = true;
      //Add components
      this.requires("Color");
      this.addComponent("Solid");
      //Bind events
    },
    PlatN: function (n, active) {
      this.platformNumber = 1;
      //Does it start retracted?
      this.active = active;
      //It starts extended
    },
    _platformNumberChanged: function (n) {
      this._platformNumber = n;
      if (n === 1) {
        this.colorValues = {
          primary: "#0000FF",
          secondary: "#000099"
        }
      } else if (n === 2) {
        this.colorValues = {
          primary: "#FF0000",
          secondary: "#990000"
        }
      }
      this._activeChanged(this._active);
      this.bind("P" + n + "Change", this._onPNChange.bind(this));
    },
    _activeChanged: function (value) {
      this._active = value;
      if (value) {
        this.addComponent("Solid");
        this.color(this.colorValues.primary);
      } else {
        this.removeComponent("Solid");
        this.color(this.colorValues.secondary);
      }
    },
    _onPNChange: function () {
      this.active = !this._active;
    }
  });
  //Shorter functions to init the top one
  //Plat1
  Crafty.c("Plat1", {
    init: function () {
      this.addComponent("PlatN");
      this.platformNumber = 1;
    },
    Plat1: function (active) {
      this.active = active;
    }
  });
//Plat 2
  Crafty.c("Plat2", {
    init: function () {
      this.addComponent("PlatN");
      this.platformNumber = 2;
    },
    Plat2: function (active) {
      this.active = active;
    }
  });
});

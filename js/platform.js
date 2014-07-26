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
    },
    PlatN: function (n, active) {
      this.platformNumber = 1;
      //Does it start retracted?
      this.active = active;
      //It starts extended
    },
    _platformNumberChanged: function (n) {
      //Unbind previous handler, if any.
      this.unbind("P" + this._platformNumber + "Change");
      //Set platform number
      this._platformNumber = n;
      //Set colourValues
      if (n === 1) {
        //Blue
        this.colorValues = {
          primary: "#0000FF",
          secondary: "#000099"
        }
      } else if (n === 2) {
        //Red
        this.colorValues = {
          primary: "#FF0000",
          secondary: "#990000"
        }
      }
      //Get activeChanged function to reset colours
      this._activeChanged(this._active);
      //Bind event handler
      this.bind("P" + n + "Change", this._onPNChange.bind(this));
    },
    _activeChanged: function (value) {
      console.log(value);
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
      if (this._platformNumber === 1) {
        console.log("TRIGGER");
      } else if (this._platformNumber === 2) {
        console.log("TRIG JOKES ON YOU")
      }
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

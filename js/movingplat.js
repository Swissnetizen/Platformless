define(["c", "moving"], function () {
  Crafty.c("MovingPlat", {
    init: function () {
      Object.defineProperties(this, {
        "start": {
          get: function () {
            return this._start;
          },
          set: this._startChanged
        },
        "end": {
          get: function () {
            return this._end;
          },
          set: this._endChanged
        }
      });
      console.log("INIT")
      this.start = {
        x: this.x,
        y: this.y
      };
      this.requires("Solid, Moving, Color");
      this.bind("EnterFrame", this._onEnterFrame);
    },
    MovingPlat: function (start, end) {
      this.start = start;
      this.end = end;
    },
    _onEnterFrame: function () {
      if (this.path instanceof Array) {
        if (this.step === undefined) this.step = -1;
        this.step += 1;
        this.x = this.path[this.step].x + this._x;
        this.y = this.path[this.step].y + this._y;
      }
    },
    //Code from StackOverFlow.
    calculatePath: function () {
      if (!this.end || !this.start) {
        this.path = undefined;
        console.log("ABORT CALC PATH")
        return this;
      }
      console.log("CALCPATH");
      this.path = [];
      // Translate coordinates
      var x1 = this._start.x;
      var y1 = this._start.y;
      var x2 = this._end.x - this._start.x;
      var y2 = this._start.y - this._end.y;
      console.log(x2, y2)
      // Define differences and error check
      var diff = {
        x: Math.abs(x2 - x1),
        y: Math.abs(y2 - y1)
      },
        swap = {
          x: (x1 < x2) ? 1 : -1,
          y: (y1 < y2) ? 1 : -1
      }
      err = diff.x - diff.y;
      // Set first coordinates
      this.path.push({x: x1, y: y1});
      // Main loop "I HAVE ABSOLUTLEY NO IDEA WHAT THIS DOES!""
      while (!((x1 == x2) && (y1 == y2))) {
        var e2 = err << 1;
        if (e2 > -diff.y) {
          err -= diff.y;
          x1 += swap.x;
        }
        if (e2 < diff.x) {
          err += diff.x;
          y1 += swap.y;
        }
        // Set coordinates
        this.path.push({x: x1, y: y1});
      }
      console.dir(this.path);
      // Return the result
      return this;
    },
    //Setter functions for start/end
    _startChanged: function (value) {
      this._start = value;
      console.log("START CHANGE")
      this.calculatePath();
    },
    _endChanged: function (value) {
      this._end = value;
      this.calculatePath();
    }
  });
});

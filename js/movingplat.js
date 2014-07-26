define(["c", "moving"], function () {
  Crafty.e("MovingPlat", {
    init: function () {
      this.__defineSetter__("start", this._startChanged);
      this.__defineSetter__("end", this._endChanged);
      this.start = {
        x: this.x,
        y: this.y
      };
      this.color("lime")
    },
    MovingPlat: function (start, end) {
      this.start = start;
      this.end = end;
    },
    //Code from StackOverFlow.
    calculatePath: function () {
      this.path = [];
      // Translate coordinates
      if (!this.end || this.start) return this;
      var x1 = this.start.x;
      var y1 = this.start.y;
      var x2 = this.end.x;
      var y2 = this.end.y;
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
      // Return the result
      this.path = c;
      return this;
    },
    //Setter functions for start/end
    _startChanged: function (value) {
      this._start = value
      this.calculatePath();
    },
    _endChanged: function (value) {
      this._end = value
      this.calculatePath();
    }
  });
});

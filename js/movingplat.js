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
      this.reversing = false;
      this.autoReverse = true;
    },
    MovingPlat: function (start, end, autoReverse) {
      this.start = start;
      this.end = end;
      this.autoReverse = autoReverse;
    },
    _onEnterFrame: function () {
      if (this.path instanceof Array && !this.calcpathActive) {
        if (this.step === undefined) this.step = -1;
        this.step += 1;
        if (this.path[this.step] === undefined) {
          this.trigger("endReached");
          if (this.autoReverse) {
            console.log("AUTOREVERSE")
            this.trigger("Reversing");
            this.reversing = !this.reversing;
            console.log(this.reversing)
            this.calculatePath();
            this.step = -1
          }
          return;
        }
        this.x = this.path[this.step].x;
        this.y = this.path[this.step].y;
      }
      this.color("lime");
    },
    //Code from StackOverFlow.
    calculatePath: function () {
      if (!this.end || !this.start) {
        this.path = undefined;
        return this;
      }
      console.log("Calculatin Path")
      this.path = [];
      this.calcpathActive = true;
      //Is reversing?
      if (!this.reversing) {
        console.log("NOT REVERSING")
        var start = {
          x: this._start.x,
          y: this._start.y
        },
          end = {
            x: this._end.x,
            y: this._end.y
          }
      } else if (this.reversing) {
        console.log("⛔CALCREVERSEPATH")
        var start = {
          x: this._end.x,
          y: this._end.y
        },
          end = {
            x: this._start.x,
            y: this._start.y
          }
      }
      //Calculate delta
        var delta = {
          x: Math.abs(end.x-start.x),
          y: Math.abs(end.y-start.y)
        },
      //Calculate swap
        swap = {
          x: (start.x < end.x) ? 1 : -1,
          y: (start.y < end.y) ? 1 : -1
        },
        //Calculate error
        error = delta.x - delta.y;
      //Loop
      while(!((start.x === end.x) && (start.y === end.y))) {
        var doubleError = 2*error;
        if (doubleError >- delta.y) {
          error -= delta.y;
          start.x += swap.x;
        }
        if (doubleError < delta.x){
          error += delta.x;
          start.y  += swap.y;
        }
        this.path.push({x: start.x, y: start.y});
      }
      this.calcpathActive = false;
      return this;
    },
    //Setter functions for start/end
    _startChanged: function (value) {
      this._start = value;
      this.calculatePath();
    },
    _endChanged: function (value) {
      this._end = value;
      this.calculatePath();
    }
  });
});

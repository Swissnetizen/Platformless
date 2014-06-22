Crafty.c("Moving", {
  speed: {
    x: 4, y: 6
  },
  init: function () {
    this.requires("Collision, 2D");
    return this;
  },
  //Speed - object with x and y or number
  //Stopo on solids - boolean, automatic collision solid detection
  //  functionnality?ß
  moving: function (speed, stopOnSolids) {
    if (typeof(speed) === "object") {
      this.speed = speed
    } else {
      this.speed.x = speed;
      this.speed.y = speed;
    }
    this.stopOnSolids = stopOnSolids
    return this;
  },
  // Move
  //Object with x and y directions
  //Or argument 1 and 2
  //All units in paces
  //aka n*speed.x
  move: function (x, y) {
    var oldposition = {
      x: this._x,
      y: this._y
    }, hitData, wayout;
    if (typeof(x) === "object") {
      var y = x.y;
      x = x.x;
    }
    this.x -= this.speed.x * x;
    this.y -= this.speed.x * y;
    this.trigger("Moved", oldposition);
    if (this.stopOnSolids) {
      hitData = this.hit("Solid");
      //Did we actually collide?
      if (hitData) {
        this.move(-x, -y);
      }
    }
    
  }
});
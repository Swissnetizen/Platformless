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
Crafty.c("ArrowPlatControl", {
  keysPressed: {},
  init: function () {
    this.requires("Moving");
  },
  wasd: function () {
    xtag.addEvent(window, "keydown:keypass(39, 37, 32)", function (e) {
      this.keysPressed[e.keyCode] = true;
    }.bind(this));
    xtag.addEvent(document, "keyup:keypass(39, 37, 32)", function (e) {
      this.keysPressed[e.keyCode] = false;
    }.bind(this));
    this.bind("RenderScene", this._onRenderScene.bind(this));
    return this;
  },
  _onRenderScene: function () {
    var x = 0, y = 0;
    if (this.keysPressed[37]) {
      x = 1;
      //Right
    } else if (this.keysPressed[39]) {
      x = -1;
    }
    //Left
    if (this.keysPressed[32]) {
      y = 1;
    }
    this.move(x, y);
  }
});
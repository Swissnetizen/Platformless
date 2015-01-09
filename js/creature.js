"use strict";
window.creatures = {}
//Creature
window.creatures.Creature = function (game, x, y, image, frame, add) {
  //Initiate Sprite
  Phaser.Sprite.apply(this, arguments);
  this.anchor.setTo(.5, .5);
  //Accessorsfae
  Object.defineProperties(this, {
    "healthPoints": new util.DynProp(
      function () { 
        return this.store.healthPoints 
      }.bind(this), function (value) { 
        if (value === 0) this.die();
        this.store.healthPoints = value;
    }.bind(this))
  });
  //Add to game if add is true or undefined
  if (add ||  typeof add === "undefined") game.add.existing(this);
  this.enablePhysics = function (physics, gravity) {
    console.log(physics);
    if (!physics) var physics = "arcade";
    game.physics[physics ||  "arcade"].enable(this);
    if (gravity) {
      this.body.gravity.x = gravity.x  || 0;
      this.body.gravity.y = gravity.y  || 0;
    }
  };
  this.die = function () {
    this.kill();
  };
};
window.creatures.Creature.prototype = Phaser.Sprite.prototype;
//Player
window.creatures.Player = function (game, x, y, image, frame) {
  //Initialise creature
  creatures.Creature.apply(this, arguments);
  //Accessors
  Object.defineProperties(this, {});
  //Use function to enable control scheme
  this.cursorKeys = game.input.keyboard.createCursorKeys();
  this.checkControls = function () {
    var c = this.cursorKeys;
    //Horizontal movement
    if (c.left.isDown) {
      this.body.velocity.x = -200;
    } else if (c.right.isDown) {
      this.body.velocity.x = 200;
    } else {
      this.body.velocity.x = 0;
    }
    
  };
  //Enable physics
  this.enablePhysics("arcade", {y: 200});
  //Called/Frame
  this.update = function () {
    this.checkControls();
  }.bind(this);
};
creatures.Player.prototype = creatures.Creature.prototype;
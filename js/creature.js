"use strict";
window.creatures = {}
window.creatures.Creature = function (game, x, y, image, frame, add) {
  //Initiate Sprite
  Phaser.Sprite.call(this, game, x, y, image, frame);
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
    game.physics[physics.toLowerCase() || "arcade"].enable(this);
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
window.creatures.Player = function (game, x, y, image, frame) {
  Object.defineProperties(this, {});
  this.cursorKeys = game.input.keyboard.createCursorKeys();
  this.checkControls = function () {
    var c = this.cursorKeys;
    if (c.left.isDown) this.velocity.x = -200;
  };
  this.update = function () {
    this.checkControls();
    console.log("HELLO");
  }.bind(this);
}
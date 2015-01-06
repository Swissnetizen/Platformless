
"use strict";
window.creatures = {}
window.creatures.Creature = function (game, x, y, image, physics, gravity) {
  //Initiate Sprite
  Phaser.Sprite.call(this, game, x, y, image);
  //Initiate Physics
  game.physics[physics.toLowerCase() || "arcade"].enable(this);
  if (gravity) {
    this.body.gravity.x = gravity.x  || 0;
    this.body.gravity.y = gravity.y  || 0;
  }
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
};
window.creatures.Creature.prototype = Phaser.Sprite.prototype;
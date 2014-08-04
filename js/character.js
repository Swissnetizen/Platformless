define(["c"], function (require) {
  "use strict";
  Crafty.c("Character", {
    nodamage: false,
    multiplier: 1,
    health: 1,
    attack: 1,
    init: function () {
      this.requires("Collision, Delay, Gravity");
      //Binds events
      this.bind("Damage", this._onDamage);
      this.bind("Death", this._onDeath);
      this.bind("Attack", this._onAttack);
      //Set up gravity
      this.gravity("Solid");
    },
    //Health of a creature
    creature: function (attack, health, label) {
      this.health = health;
      this.attack = attack;
      this.label = label;
      return this;
    },
    //Being told to attack!
    _onAttack: function (target) {
      target.trigger("Damage", this.attack);
    },
    //Damage Handling function
    _onDamage: function (amount) {
      //If invincible take no damage
      if (this.nodamage) return;
      console.log(this.label + ": OUCH");
      //Reduce health by one
      this.health =- amount;
      //Is health 0? then die
      if (this.health <= 0) this.die();
      //Invincibillity for 1 s
      this.nodamage = true;
      this.delay(function () {
        this.nodamage = false;
      }.bind(this), 1000)
    },
    _onDeath: function () {
      console.log("DEATH of " + this.label);
    },
    //When it runs out of health
    die: function (reason) {
      this.trigger("Death");
      this.destroy();
      return this;
    }
  });
});

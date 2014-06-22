Crafty.c("DeathPig", {
  init: function
  deathPig: function () {
    this.Delay(function () {
      this.direction = !this.direction;
      this.deathPig();
    } 1020);
    this.x += 5
  },
});
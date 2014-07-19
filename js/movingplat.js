define(["c", "moving"], function () {
  Crafty.e("MovingPlat", {
    init: function () {

    },
    MovingPlat: function (start, end) {


    },
    //Code from StackOverFlow.
    calculatePath: (start, end) {
      var path = [];
      // Translate coordinates
      var x1 = start.x;
      var y1 = start.y;
      var x2 = end.x;
      var y2 = end.y;
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
      coordinatesArray.push({x: x1, y: y1});
      // Main loop I HAVE ABSOLUTLEY NO IDEA WHAT THIS DOES!
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
        coordinatesArray.push({x: x1, y: y1});
      }
      // Return the result
      this.path = c;

  }
});

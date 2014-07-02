define(["c", "statsJS"], function (c, Stats) {
  Crafty.c("DisplayStats", {
    init: function () {
      //Spawn objects
      this.FPS = new Stats();
      this.MS = new Stats();
      //Configure FPS
      this.FPS.setMode(0);
      //Align Top Left
      this.FPS.domElement.style.position = 'absolute';
      this.FPS.domElement.style.left = '0px';
      this.FPS.domElement.style.top = '0px';
      //Configure MS
      this.MS.setMode(1);
      //Align top right
      this.MS.domElement.style.position = 'absolute';
      this.MS.domElement.style.right = '0px';
      this.MS.domElement.style.top = '0px';
      //InsertElements;
      document.body.appendChild(this.MS.domElement);
      document.body.appendChild(this.FPS.domElement);
      //Bind events
      this.bind("EnterFrame", this._onEnterFrame);
      this.bind("ExitFrame", this._onExitFrame);
    },
    _onEnterFrame: function () {
      //Finish Last mesuarement
      this.FPS.end();
      this.MS.end();
      //Start new measurement
      this.FPS.begin();
      this.MS.begin();
    },
    _onExitFrame: function () {
      //Finish Last mesuarement
      this.FPS.end();
      this.MS.end();
    }
  })
})
define(["c", "statsJS"], function (c, Stats) {
  Crafty.c("DisplayStats", {
    init: function () {
      this.requires("DOM");
      //Spawn objects
      this.FPS = new Stats();
      this.MS = new Stats();
      //Configure FPS
      this.FPS.setMode(0);
      this.FPS.domElement.style.display = "inline-block";
      //Configure MS
      this.MS.setMode(1);
      this.MS.domElement.style.display = "inline-block";
      //Align the entity to the topleft
      this._element.style.position = 'absolute';
      this._element.style.left = '0px';
      this._element.style.top = '0px';
      //InsertElements;
      this._element.appendChild(this.FPS.domElement);
      this._element.appendChild(this.MS.domElement);
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
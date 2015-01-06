(function () {
  "use strict";
  window.util = {};
  window.util.DynProp = function (get, set) {
    this.enumerable = true;
    this.configurable = true;
    this.get = get;
    this.set = set;
  };  
}());
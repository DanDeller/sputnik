"use strict";

function Person() {
  var _this = this;

  this.age = 0;

  setInterval(function () {
    _this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();
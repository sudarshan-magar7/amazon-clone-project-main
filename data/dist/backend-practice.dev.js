"use strict";

var xrh = new XMLHttpRequest();
xrh.open('GET', 'https://supersimplebackend.dev/hello');
xrh.addEventListener('load', function () {
  console.log(xrh.response);
});
xrh.send();
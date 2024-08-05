"use strict";

console.log("1");
console.log("2"); // fetch used for API calls

var res = fetch("https://jsonplaceholder.typicode.com/todos/1").then(function (res) {
  return res.json(); //async ==>pro
}).then(function (api) {
  console.log(api);
}); //.catch((err) => {
//console.log("Error:",err);
//})

function fetchData() {
  var res2, data;
  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://jsonplaceholder.typicode.com/todos/1"));

        case 3:
          res2 = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(res2.json());

        case 6:
          data = _context.sent;
          console.log(data);
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 13:
          _context.prev = 13;
          console.log("hello");
          return _context.finish(13);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10, 13, 16]]);
}

fetchData();
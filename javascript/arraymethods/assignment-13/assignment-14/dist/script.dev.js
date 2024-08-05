"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var baconIpsumDiv = document.getElementById('bacon-ipsum');
  var errorMessageDiv = document.getElementById('error-message');
  var loadingMessageDiv = document.getElementById('loading-message');
  var refreshButton = document.getElementById('refresh-button');

  function fetchBaconIpsum() {
    var response, data;
    return regeneratorRuntime.async(function fetchBaconIpsum$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            loadingMessageDiv.textContent = 'Loading...';
            errorMessageDiv.textContent = '';
            baconIpsumDiv.innerHTML = '';
            _context.next = 6;
            return regeneratorRuntime.awrap(fetch('https://baconipsum.com/api/?type=all'));

          case 6:
            response = _context.sent;

            if (response.ok) {
              _context.next = 9;
              break;
            }

            throw new Error("Network response was not ok ".concat(response.statusText));

          case 9:
            _context.next = 11;
            return regeneratorRuntime.awrap(response.json());

          case 11:
            data = _context.sent;
            displayBaconIpsum(data);
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            errorMessageDiv.textContent = "Failed to fetch data: ".concat(_context.t0.message);

          case 18:
            _context.prev = 18;
            loadingMessageDiv.textContent = '';
            return _context.finish(18);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 15, 18, 21]]);
  }

  function displayBaconIpsum(data) {
    data.forEach(function (item) {
      var p = document.createElement('p');
      p.textContent = item;
      baconIpsumDiv.appendChild(p);
    });
  }

  refreshButton.addEventListener('click', fetchBaconIpsum); // Fetch Bacon Ipsum on initial load

  fetchBaconIpsum();
});
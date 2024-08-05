"use strict";

// script.js
document.addEventListener('DOMContentLoaded', function () {
  var baconIpsumDiv = document.getElementById('bacon-ipsum');
  var errorMessageDiv = document.getElementById('error-message');
  fetch('https://baconipsum.com/api/?type=all').then(function (response) {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    return response.json();
  }).then(function (data) {
    // Clear previous data
    baconIpsumDiv.innerHTML = '';
    errorMessageDiv.innerHTML = ''; // Create paragraphs for each item in the response

    data.forEach(function (item) {
      var p = document.createElement('p');
      p.textContent = item;
      baconIpsumDiv.appendChild(p);
    });
  })["catch"](function (error) {
    errorMessageDiv.textContent = 'Failed to fetch data: ' + error.message;
  });
});
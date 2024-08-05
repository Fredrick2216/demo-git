// script.js
document.addEventListener('DOMContentLoaded', () => {
    const baconIpsumDiv = document.getElementById('bacon-ipsum');
    const errorMessageDiv = document.getElementById('error-message');

    fetch('https://baconipsum.com/api/?type=all')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Clear previous data
            baconIpsumDiv.innerHTML = '';
            errorMessageDiv.innerHTML = '';

            // Create paragraphs for each item in the response
            data.forEach(item => {
                const p = document.createElement('p');
                p.textContent = item;
                baconIpsumDiv.appendChild(p);
            });
        })
        .catch(error => {
            errorMessageDiv.textContent = 'Failed to fetch data: ' + error.message;
        });
});
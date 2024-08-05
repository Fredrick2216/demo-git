document.addEventListener('DOMContentLoaded', () => {
    const baconIpsumDiv = document.getElementById('bacon-ipsum');
    const errorMessageDiv = document.getElementById('error-message');
    const loadingMessageDiv = document.getElementById('loading-message');
    const refreshButton = document.getElementById('refresh-button');

    async function fetchBaconIpsum() {
        try {
            loadingMessageDiv.textContent = 'Loading...';
            errorMessageDiv.textContent = '';
            baconIpsumDiv.innerHTML = '';

            const response = await fetch('https://baconipsum.com/api/?type=all');
            if (!response.ok) {
                throw new Error(`Network response was not ok ${response.statusText}`);
            }

            const data = await response.json();
            displayBaconIpsum(data);
        } catch (error) {
            errorMessageDiv.textContent = `Failed to fetch data: ${error.message}`;
        } finally {
            loadingMessageDiv.textContent = '';
        }
    }

    function displayBaconIpsum(data) {
        data.forEach(item => {
            const p = document.createElement('p');
            p.textContent = item;
            baconIpsumDiv.appendChild(p);
        });
    }

    refreshButton.addEventListener('click', fetchBaconIpsum);

    // Fetch Bacon Ipsum on initial load
    fetchBaconIpsum();
});
const memberCount = document.querySelector('.member-count');

fetch('sites.json')
    .then(response => response.json())
    .then((sites) => {
        memberCount.innerHTML += ` (${sites.length} ${sites.length == 1 ? ` site` : ` sites`})`;
    });
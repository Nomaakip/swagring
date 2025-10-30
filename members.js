const memberCount = document.querySelector('.member-count');
const members = document.querySelector('.members');


function sanitizeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

fetch('sites.json')
    .then(response => response.json())
    .then((sites) => {
        memberCount.innerHTML += `There ${sites.length == 1 ? `is currently ${sites.length} member` : `are currently ${sites.length} members`}:`;

        sites.forEach(site => {
            members.innerHTML += `<div class="member"><a href="${site.url}">${site.name}</a></div>`;
        });
    });
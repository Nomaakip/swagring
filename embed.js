const params = new URLSearchParams(window.location.search);
const siteName = params.get("name");

const left = document.querySelector('.left a');
const right = document.querySelector('.right a');

left.href += `&name=${siteName}`;
right.href += `&name=${siteName}`;
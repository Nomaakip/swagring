let sites = [];

fetch("sites.json")
    .then((response) => response.json())
    .then((data) => {
        sites = data;
        redirect();
    })
    .catch((error) => {
        console.error("Error fetching site list:", error);
        alert("Error fetching site list.");
    });

function redirect() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const direction = params.get("to");

    const currentSiteIndex = sites.findIndex(
        (site) => site.name.toLowerCase() == name.toLowerCase()
    );

    let newSiteIndex;
    if (direction == "prev") {
        newSiteIndex = (currentSiteIndex + 1) % sites.length;
    } else if (direction == "next") {
        newSiteIndex = (currentSiteIndex - 1 + sites.length) % sites.length;
    }

    if (currentSiteIndex !== -1 && newSiteIndex !== -1) {
        window.location.href = sites[newSiteIndex].url;
    } else {
        alert("User not found.");
    }
}

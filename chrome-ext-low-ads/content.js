
window.onload = (event) => {

    const ads = [];

    for (const elm of document.querySelectorAll('span')) {
        const text = elm.textContent;
        if (text === "Ad·" || text === "Ad" || text === "Ads") {
            ads.push(elm);
        }
    }

    ads.forEach(element => {
        element.className = "low-search-add";
        var resultItem = element.closest(".uEierd");
        resultItem.classList.add("low-search-add");
    });

};

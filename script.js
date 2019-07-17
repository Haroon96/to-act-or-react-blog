function scrollTo(id) {
    console.log(id);
    document.getElementById(id).scrollIntoView();
}

function removeLoader(id) {
    let elem = document.getElementById(id);
    elem.parentNode.removeChild(elem);
}

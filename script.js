function scrollTo(id) {
    document.getElementById(id).scrollIntoView();
}

function removeLoader(id) {
    let elem = document.getElementById(id);
    elem.parentNode.removeChild(elem);
}

function createAnchor(name) {
    let anchor = document.createElement('div');
    anchor.className += 'section-anchor';
    return anchor;    
}

function createNavItem(name, anchor) {
    let li = document.createElement('li');
    li.textContent = name;
    li.onclick = function () { 
        anchor.scrollIntoView();
    };
    return li;
}

function populateNavbar() {
    let ul = document.getElementById('menubar-ul');
    let headings = document.getElementsByClassName('heading');
    let anchors = [];
    let lis = [];
    for (let i in headings) {
        let elem = headings[i];
        if (elem.localName == 'p') {
            let anchor = createAnchor(elem.textContent);
            let li = createNavItem(elem.textContent, anchor);
            ul.appendChild(li);
            elem.parentNode.insertBefore(anchor, elem);

            lis.push(li);
            anchors.push(anchor);
        }
    }
    window.onscroll = function() {
        let top = document.documentElement.scrollTop + 1;
        for (let i = 0; i < anchors.length; ++i) {
            lis[i].classList.remove('active');
            if (top >= anchors[i].offsetTop && (i + 1 == anchors.length || top < anchors[i + 1].offsetTop)) {
                lis[i].classList.add('active');
            }
        }
    }
}

populateNavbar();
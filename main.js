function firstColor() {
    let i = 0;
    let elements = document.getElementsByClassName('circle');
    setInterval(function() {
    elements[i].style.background = '#F8C471';
    i = (i + 1) % elements.length;
    }, 30)
}

function secondColor() {
    let i = 0;
    let elements = document.getElementsByClassName('circle');
    setInterval(function() {
    elements[i].style.background = '#C39BD3';
    i = (i + 1) % elements.length;
    }, 40)
}

function thirdColor() {
    let i = 0;
    let elements = document.getElementsByClassName('circle');
    setInterval(function() {
    elements[i].style.background = '#82E0AA';
    i = (i + 1) % elements.length;
    }, 50)
}

let $ = (id) => {
    return document.getElementById(id);
};

let generateNumber = () => {
    return Math.floor((Math.random() * 6) + 1);
};

function changeImg(domImg,srcImage) {
    let img = new Image();
    img.onload = function() {
        domImg.src = this.src;
    };
    img.src = srcImage;
};

const imageMap = {
    1: 'images/one.png',
    2: 'images/two.png',
    3: 'images/three.png',
    4: 'images/four.png',
    5: 'images/five.png',
    6: 'images/six.png'
};

window.addEventListener("load", () => {
    $("roll").addEventListener("click", () => {
        changeImg($("img"), imageMap[generateNumber()]);
    });
});
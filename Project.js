let x = 0;
let y = 0;
let Timeout;
let showed = false;
let body = document.querySelector("body");
let image = new Image();

document.querySelector('body').onmousemove = function(e) {
    x = e.clientX;
    y = e.clientY;    
}

const imgList = [
    "https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=9060",
    "https://images.pexels.com/photos/1451074/pexels-photo-1451074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=560",
    "https://images.pexels.com/photos/1460880/pexels-photo-1460880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200",
    "https://images.pexels.com/photos/1437629/pexels-photo-1437629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500",
    "https://images.pexels.com/photos/87284/ocean-seacoast-rocks-water-87284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=400",
    "https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=1260",
    "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
]


function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addImage() {
    let random = Math.floor(Math.random() * imgList.length);
    document.body.appendChild(image);
    image.src = imgList[random];

    document.querySelector("img").animate([{opacity: 0}, {opacity: 1}, {opacity: 1}, {opacity: 1}, {opacity: 0}], 5000);
    
    let maxWidth = document.documentElement.clientWidth - image.naturalWidth;
    let maxHeight = document.documentElement.clientHeight - image.naturalHeight;
    
    let leftImg = maxWidth > 0 
        ? `${randomNumber(0, maxWidth)}px`
        : "0px"
    let topImg = maxHeight > 0
        ? `${randomNumber(0, maxHeight)}px`
        : "0px"
        console.log("w, h", maxWidth, maxHeight)
    image.style.position = 'fixed';
    image.style.maxWidth = "100vw";
    image.style.maxHeight = "100vh";
    image.style.left = `${leftImg}`;
    image.style.top = `${topImg}`;
    setInterval(addImage, 5000);
}

setInterval(function() {
    if (x == 0 && y == 0) {
        if (!showed) {
            Timeout = setTimeout(function() {
                image.style.display = 'block';
                addImage();
            }, 10000);
            showed = true;
        }
    } 
    else {
        console.log('mouse moves');
        clearTimeout(Timeout);
        image.style.display = 'none';
        showed = false;
    }
    x = 0;
    y = 0;
}, 100);
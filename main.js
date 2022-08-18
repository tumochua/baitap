var imgNumber = 0;
var path = [
  "https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-16318566455422115837189.jpeg",
  "https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-1631856680040545802895.jpg",
  "https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-1631856723678951649835.jpg",
  "https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-16318567950911173571686.jpg",
];
var numberOfImg = path.length;
var timer = null;

function slide() {
  imgNumber = (imgNumber + 1) % path.length;
  console.log(imgNumber);
  document.getElementById("imgSlideshow").src = path[imgNumber];
  changeCounter(imgNumber + 1, numberOfImg);
}

function setTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  } else {
    timer = setInterval(slide, 1000);
  }
  return false;
}

function previousImage() {
  --imgNumber;
  if (imgNumber < 0) {
    imgNumber = numberOfImg - 1;
  }
  document.getElementById("imgSlideshow").src = path[imgNumber];
  changeCounter(imgNumber + 1, numberOfImg);
  return false;
}

function nextImage() {
  ++imgNumber;
  if (imgNumber > numberOfImg - 1) {
    imgNumber = 0;
  }
  document.getElementById("imgSlideshow").src = path[imgNumber];
  changeCounter(imgNumber + 1, numberOfImg);
  return false;
}

function changeCounter(cur, total) {
  document.getElementById("counter").innerHTML = cur + "/" + total;
}
document.getElementById("counter").innerHTML = 1 + "/" + path.length;

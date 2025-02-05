const bg = ["한글.png","감사.png","사랑.png", "바람.png","별.png","바다.png","지구.png","향기.png","복.png", "친구.png", "문화.png", "꽃.png",
   "평화.png", "가족.png", "인연.png","행복.png","정.png", "마실.png","한.png","희망.png", "설렘.png","안녕.png", "전통.png", "효.png"];
const meanings = [
  "Hangul: The writing system of Korea.",
  "Gamsa: Gratitude.",
  "Sarang: Love.",
  "Baram: Wind.",
  "Byeol: Star.",
  "Bada: Ocean.",
  "Jigu: Earth.",
  "Hyanggi: Fragrance.",
  "Bok: Blessing.",
  "Chingu: Friend.",
  "Munhwa: Culture.",
  "Kkot: Flower.",
  "Pyeonghwa: Peace.",
  "Gajok: Family.",
  "Inyeon: The unseen connection that ties people together across time and space.", 
  "Haengbok:Happiness.",
  "Jeong: A deep emotional bond and warmth shared between people.",
  "Masil: A short neighborhood walk or visit.",
  "Han: A uniquely Korean emotion of deep sorrow, unresolved longing.",
  "Huimang: Hope.",
  "Seolleim: A fluttering, excited feeling.",
  "Annyeong: A Korean greeting that means both hello and goodbye.",
  "Jeontong: Tradition.",
  "Hyo: the deep respect and duty towards one's parents and elders in Korean culture."



];
let index = 0;

document.getElementById("nextButton").addEventListener("click", function() {
    index = (index + 1) % bg.length;

    let meaningElem = document.getElementById("meaningText");
    meaningElem.textContent = meanings[index];

    let elem = document.getElementById("hangulImage");
    elem.src = bg[index];
    if(index === 4 || index === 8|| index === 11||index === 16||index === 18||index === 23) {
      elem.classList.add('small')
    } else {
      elem.classList.remove('small')
    }
    clear();
});

let img;
let angle = 0;
let brushImages = ['brush01.png', 'brush02.png', 'brush03.png', 'brush04.png']; 
let hangulImages = ['hangul01.png', 'hangul02.png', 'hangul03.png', 'hangul04.png']; 
let currentImageIndex = 0;




function setup() {
  let cnv = createCanvas(1300, 600); 
  let x = (windowWidth - width) / 2; 
  let y = (windowHeight - height) / 2; 
  cnv.position(x, y); 
  cnv.style("z-index", "0");

  img = loadImage(hangulImages[currentImageIndex]);

  brushImages.forEach((image, index) => {
    const imgElement = createImg(image, `Brush ${index + 1}`);
    imgElement.position(50, 100 + index * 110); 
    imgElement.class(`brush-btn brush-${index}`); 
    imgElement.mousePressed(() => changeImage(index)); 
});


  const resetButton = createButton('RESET');
  resetButton.class('reset-btn');
  resetButton.mousePressed(resetCanvas);
}

function changeImage(index) {
  currentImageIndex = index;
  img = loadImage(hangulImages[currentImageIndex]); 
}
function resetCanvas() {
  clear();
}


function mouseDragged() {
  push();
  translate(mouseX, mouseY);
  rotate(radians(angle));
  imageMode(CENTER);
  image(img, 0, 0, 55, 55); 
  pop();
  

  angle += 7;
}

document.addEventListener("dragstart", function(event) {
  event.preventDefault();
});


document.getElementById("saveButton").addEventListener("click", saveImage);

function saveImage() {
  let tempCanvas = createGraphics(1300, 600); 
  
  
  tempCanvas.background('#fffef5');
  

  tempCanvas.image(get(), 0, 0, 1300, 600); 


  tempCanvas.save('my_hangulwriting.png');
}


document.addEventListener("DOMContentLoaded", () => {
  const aboutButton = document.querySelector(".aboutbutton");
  const imageContainer = document.querySelector("#imageContainer");
  const brushOverviewButton = document.querySelector(".brushoverviewbutton");
  const hangulAboutImage = document.querySelector(".hangulabout");

  aboutButton.addEventListener("click", () => {
    imageContainer.classList.remove("hidden");
    brushOverviewButton.style.display = "block";

    if (!document.querySelector("#cancelButton")) {
      const removeButton = document.createElement("img");
      removeButton.id = "cancelButton";
      removeButton.src = "cancelbutton.png";
      removeButton.alt = "Close";
      removeButton.style.position = "absolute";
      removeButton.style.top = "130px";
      removeButton.style.right = "200px";
      removeButton.style.width = "40px";
      removeButton.style.cursor = "pointer";
      removeButton.style.transition = "0.4s";
      removeButton.style.zIndex = "1000";

      document.body.appendChild(removeButton);

      removeButton.addEventListener("mouseenter", () => {
        removeButton.src = "cancelbuttoncontrast.png";
      });

      removeButton.addEventListener("mouseleave", () => {
        removeButton.src = "cancelbutton.png";
      });

      removeButton.addEventListener("click", () => {
        imageContainer.classList.add("hidden");
        removeButton.remove();
        hangulAboutImage.src = "hangulabout.png"; 
      });
    }
  });

 
  if (brushOverviewButton) {
    brushOverviewButton.style.pointerEvents = "auto"; 
    brushOverviewButton.style.zIndex = "1001"; 

    brushOverviewButton.addEventListener("click", () => {
      console.log("Brush Overview Button Clicked!"); 
      hangulAboutImage.src = "brushoverview.png";
      brushOverviewButton.style.display = "none";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.querySelector(".bgm"); 
  const audioToggle = document.getElementById("audioToggle");
  const audioIcon = document.getElementById("audioIcon");

  let isPlaying = true; 

  audioToggle.addEventListener("click", () => {
      if (isPlaying) {
          audio.pause();
          audioIcon.src = "mutebutton.png"; 
      } else {
          audio.play();
          audioIcon.src = "playaudiobutton.png"; 
      }
      isPlaying = !isPlaying; 
  });
});

 
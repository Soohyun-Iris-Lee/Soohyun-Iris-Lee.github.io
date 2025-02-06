const body = document.querySelector('body');
const slices = document.querySelectorAll('.slice');
const audio = document.querySelector('.kaleidoscopeaudio'); 


const KaleidoscopeArray = [
    'kaleidoscope1.jpeg',
    'kaleidoscope2.jpg',
    'kaleidoscope3.jpeg',
    'kaleidoscope4.jpg',
    'kaleidoscope5.jpg',
    'kaleidoscope6.jpg',
    'kaleidoscope7.jpg',
    'kaleidoscope8.jpeg',
    'kaleidoscope9.jpg',
    'kaleidoscope10.jpg'
];


function coordinate(event) {
    let x = event.clientX;
    
    const relX = (x / body.offsetWidth) * 100; 
    
   
    const minZoom = 20;
    const maxZoom = 140;
    
  
    const zoomValue = Math.max(minZoom, Math.min(relX, maxZoom));

    console.log(x, zoomValue); 

    slices.forEach((obj) => {
        obj.style.backgroundSize = `${zoomValue}%`;
    });
}


function changeImage() {
    
    const randomIndex = Math.floor(Math.random() * KaleidoscopeArray.length);

   
    slices.forEach((obj) => {
        obj.style.backgroundImage = `url(${KaleidoscopeArray[randomIndex]})`;
    });
    if (audio) {
        audio.currentTime = 0; 
        audio.play();
    }

}


body.addEventListener('mousemove', coordinate); 
body.addEventListener('click', changeImage);

document.addEventListener("DOMContentLoaded", () => {
    const aboutbutton = document.querySelector(".aboutbutton");
    const imageContainer = document.querySelector("#imageContainer");
  
  
    aboutbutton.addEventListener("click", () => {
   
      imageContainer.classList.remove("hidden");
  
   
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
        removeButton.style.zIndex = "1000"
    
        document.body.appendChild(removeButton);
    
      
        removeButton.addEventListener("mouseenter", () => {
          removeButton.src = "cancelbuttoncontrast.png";
      });
  
      removeButton.addEventListener("mouseleave", () => {
          removeButton.src = "cancelbutton.png";
      });
  
      removeButton.addEventListener("click", () => {
          if (imageContainer) {
              imageContainer.classList.add("hidden");
          }
          removeButton.remove();
        });
    }
    
      }
   ) });




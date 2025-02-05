const body = document.querySelector('body');
const slices = document.querySelectorAll('.slice');
const audio = document.querySelector('.kaleidoscopeaudio'); 

// Array of image URLs
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

// Function to update background size based on mouse position
function coordinate(event) {
    let x = event.clientX;
    
    const relX = (x / body.offsetWidth) * 100; // Relative horizontal position
    
    // Define the zoom range (e.g., between 50% and 150%)
    const minZoom = 20;
    const maxZoom = 140;
    
    // Clamp the value to stay within the range
    const zoomValue = Math.max(minZoom, Math.min(relX, maxZoom));

    console.log(x, zoomValue); // Log mouse coordinates and zoom level

    slices.forEach((obj) => {
        obj.style.backgroundSize = `${zoomValue}%`;
    });
}

// Function to change the background image randomly on click
function changeImage() {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * KaleidoscopeArray.length);

    // Update the background image for all slices
    slices.forEach((obj) => {
        obj.style.backgroundImage = `url(${KaleidoscopeArray[randomIndex]})`;
    });
    if (audio) {
        audio.currentTime = 0; // Reset the audio to start from the beginning
        audio.play();
    }

}

// Add event listeners
body.addEventListener('mousemove', coordinate); // Mousemove to update background size
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




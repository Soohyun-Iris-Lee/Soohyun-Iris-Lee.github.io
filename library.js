document.addEventListener("DOMContentLoaded", function () {
 
  const headingImg = document.querySelector(".heading");

  if (headingImg) {
    headingImg.addEventListener("mouseover", function () {
      headingImg.src = "goyouheading2.png"; 
      headingImg.style.width = "278px";
    });

    headingImg.addEventListener("mouseout", function () {
      headingImg.src = "goyouheading.png"; 
      headingImg.style.width = "458px";
    });
  }

 
  const bells = document.querySelectorAll(".bell01, .bell02, .bell03");

 
  const bellSounds = {
    bell01: new Audio("librarybellaudio.mp3"),
    bell02: new Audio("librarybellaudio2.mp3"),
    bell03: new Audio("librarybellaudio3.mp3"),
  };

  
  
  bells.forEach((bell) => {
    bell.addEventListener("mouseenter", function () {
      bell.style.animation = "swing 0.6s ease-in-out";
      

      const sound = bellSounds[bell.classList[0]];
      if (sound) {
        sound.currentTime = 0; 
        sound.play();
      }
    });
  
    bell.addEventListener("animationend", function () {
      bell.style.animation = "";
    });
  });
  
});


document.addEventListener("DOMContentLoaded", () => {
  const projectfdescriptionbutton = document.querySelector(".projectfdescriptionbutton");
  const imageContainer = document.querySelector("#imageContainer");


  projectfdescriptionbutton.addEventListener("click", () => {
 
    imageContainer.classList.remove("hidden");

 
    if (!document.querySelector("#removeButton")) {
      const removeButton = document.createElement("img");
      removeButton.id = "removeButton";
      removeButton.src = "closebuttoncontrast.png";
      removeButton.alt = "Close";
      removeButton.style.position = "absolute";
      removeButton.style.top = "310px";
      removeButton.style.right = "30px";
      removeButton.style.width = "50px";
      removeButton.style.cursor = "pointer";
      removeButton.style.transition = "0.4s"; 
  
      document.body.appendChild(removeButton);
  
    
      removeButton.addEventListener("mouseenter", () => {
          removeButton.src = "closebutton.png";
      });
  
     
      removeButton.addEventListener("mouseleave", () => {
          removeButton.src = "closebuttoncontrast.png";
      });
  
      removeButton.addEventListener("click", () => {
          const imageContainer = document.querySelector("#imageContainer"); 
          if (imageContainer) {
              imageContainer.classList.add("hidden");
          }
          removeButton.remove();
      });
  }
  
    }
 ) });

 document.addEventListener("dragstart", function(event) {
  event.preventDefault();
});


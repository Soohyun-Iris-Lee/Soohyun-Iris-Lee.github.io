const img = document.querySelector('img');
const button = document.querySelector('.create');
const prompt = document.querySelector('.prompt');
const defaultText = "Let AI sketch your ideas with a touch of Korean tradition! Type in something.";
const loader = document.querySelector('.loader');
const canvas = document.createElement('canvas');
let isLoading = false;
function animate() {
  if(isLoading) {
    loader.style.display = "block"
    img.style.display = "none"
  } else {
    img.style.display = 'block'
    loader.style.display = "none"
  }
  requestAnimationFrame(animate)
}
animate();
button.addEventListener('click', async()=> {
  isLoading = true;
    const url = "http://localhost:3000/";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({prompt: prompt.value+', in the style of TOK'}),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        img.src = data;
        isLoading = false;
        return data;
      })
      .catch(error => console.error('Error fetching the cat image:', error));

    
})

prompt.value = defaultText;
  prompt.style.color = "#aaa"; 


  prompt.addEventListener("focus", () => {
    if (prompt.value === defaultText) {
      prompt.value = "";
      prompt.style.color = "#fffef5"; 
    }
  });


  prompt.addEventListener("blur", () => {
    if (prompt.value.trim() === "") {
      prompt.value = defaultText;
      prompt.style.color = "#aaa";
    }
  });



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



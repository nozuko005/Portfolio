 /* HTML elements */
 const divContainer = document.querySelector(".div-container");
 const divs = divContainer.querySelectorAll("div.text");
 const lastDiv = divs[divs.length - 1];
 /* Clone the last picture element */
 const lastDivClone = lastDiv.cloneNode(true);
 lastDivClone.classList.add("clone");
 divContainer.append(lastDivClone);

 /* Slider Input */
 const sliderInput = document.querySelector(".slidercontainer input");
 sliderInput.addEventListener("change", function (e) {
   console.log(sliderInput.value);
   document.documentElement.style.setProperty(
     "--anim-seconds",
     `${sliderInput.value}s`
   );
 });
 
const inputSlider = document.querySelector(".size__password--slider--field input");
const slideValue = document.querySelector(".size__password--description--value")

inputSlider.oninput = (()=>{
    let value = inputSlider.value;
    let realValue = inputSlider.value;

    slideValue.textContent = value;
});

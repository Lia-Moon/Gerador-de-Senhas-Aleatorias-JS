window.onload = function() {

    const inputSlider = document.querySelector(".size__password--slider--field input"); // slider
    const numberShowed = document.querySelector(".size__password--description--value") // value showed for the size

    let valueInputSlider = inputSlider.value;
    let valueDisplayed = numberShowed.value;

    inputSlider.oninput = (()=>{
        valueInputSlider = inputSlider.value;
        numberShowed.textContent = valueInputSlider;
    });

    const minusButton = document.querySelector("#minus__button");
    const plusButton = document.querySelector("#plus__button");

    minusButton.onclick = () => {
        if (valueInputSlider > 0 && valueInputSlider <= 50) {
            let valueInputSliderNumber = Number(valueInputSlider);

            valueInputSliderNumber -= 1;
            valueInputSlider = (valueInputSliderNumber).toString();

            numberShowed.textContent = valueInputSlider;
            inputSlider.value = valueInputSlider;

            return valueInputSlider;
        }
    };

    console.log("Valor do input slider antes do clique:", valueInputSlider);
    plusButton.onclick = () => {
        if (valueInputSlider >= 0 && valueInputSlider < 50) {           
            let valueInputSliderNumber = Number(valueInputSlider);

            valueInputSliderNumber += 1;
            valueInputSlider = (valueInputSliderNumber).toString();

            numberShowed.textContent = valueInputSlider;
            inputSlider.value = valueInputSlider;

            return valueInputSlider;
        }
    };

};
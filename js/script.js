window.onload = function() {
    
    const passwordOutput = document.querySelector(".page__output--container--password");           

    // Buttons -------------------------------------------------------------
    const generateButton = document.querySelector("#generate__button");
    const generateButtonSymbol = document.querySelector(".material-symbols-outlined");
    const copyButton = document.querySelector(".copy__button");
    const minusButton = document.querySelector("#minus__button");
    const plusButton = document.querySelector("#plus__button");

    const maxValuePassword = 35;     

    // Options -------------------------------------------------------------
    // slider
    const inputSlider = document.querySelector(".size__password--slider--field input");
    let valueInputSlider = inputSlider.value;
    // value showed for the size
    const numberShowed = document.querySelector(".size__password--description--value");

    inputSlider.oninput = (()=>{
        valueInputSlider = inputSlider.value;
        numberShowed.textContent = valueInputSlider;
    });
  
    // When clicking the minus button, the value and the slider change
    minusButton.onclick = () => {
        if (valueInputSlider > 0 && valueInputSlider <= maxValuePassword) {
            let valueInputSliderNumber = Number(valueInputSlider);

            valueInputSliderNumber -= 1;
            valueInputSlider = (valueInputSliderNumber).toString();

            numberShowed.textContent = valueInputSlider;
            inputSlider.value = valueInputSlider;

            return valueInputSlider;
        }
    };

    // console.log("Valor do input slider antes do clique:", valueInputSlider);

    // When clicking the plus button, the value and the slider change
    plusButton.onclick = () => {
        if (valueInputSlider >= 0 && valueInputSlider < maxValuePassword) {           
            let valueInputSliderNumber = Number(valueInputSlider);

            valueInputSliderNumber += 1;
            valueInputSlider = (valueInputSliderNumber).toString();

            numberShowed.textContent = valueInputSlider;
            inputSlider.value = valueInputSlider;

            return valueInputSlider;
        }
    };
  
    function generatePassword(length, uppercase, lowercase, numbers, special) {
        let valuePasswordOutput = '';
        let characters = '';
        const passwordLength = length;

        if(uppercase === true) {
            characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }

        if(lowercase === true) {
            characters += 'abcdefghijklmnopqrstuvwxyz';
        }

        if(numbers === true) {
            characters += '0123456789';
        }
        if(special === true) {
            characters += '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
        }

        for(let i = 0; i < passwordLength; i++) {
            valuePasswordOutput += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        console.log(characters);
        console.log(characters.length);
        console.log(valuePasswordOutput);
        console.log(passwordLength);

        return valuePasswordOutput;
    }

    // Click to generate the random
    const clickGeneratePassword = () => {        
        const uppercaseOption = document.querySelector("#checkbox__uppercase"); 
        const lowercaseOption = document.querySelector("#checkbox__lowercase"); 
        const numbersOption = document.querySelector("#checkbox__numbers"); 
        const specialOption = document.querySelector("#checkbox__special"); 
        let uppercaseOptionCheckbox = false;
        let lowercaseOptionCheckbox = false;
        let numbersOptionCheckbox = false;
        let specialOptionCheckbox = false;

        if(uppercaseOption.checked) {
            uppercaseOptionCheckbox = true;
        }

        if(lowercaseOption.checked) {
            lowercaseOptionCheckbox = true;
        }

        if(numbersOption.checked) {
            numbersOptionCheckbox = true;
        }

        if(specialOption.checked) {
            specialOptionCheckbox = true;
        }

        const newPassword = generatePassword(valueInputSlider, uppercaseOptionCheckbox, lowercaseOptionCheckbox, numbersOptionCheckbox, specialOptionCheckbox);
        passwordOutput.value = newPassword; 
    };   

    generateButton.onclick = clickGeneratePassword;
    generateButtonSymbol.onclick = clickGeneratePassword;

    function copyToClipboard(passwordToCopy) {
        navigator.clipboard.writeText(passwordToCopy)
        .then(() => {
            // Mensagem de sucesso (opcional)
            console.log('Texto copiado com sucesso:', passwordToCopy);
            alert('A senha foi copiada para a área de transferência!');
        })
        .catch(err => {
            // Mensagem de erro (opcional)
            console.error('Erro ao copiar o texto:', err);
            alert('Erro ao copiar. O seu navegador pode não suportar a cópia automática.');
        });
    }

    copyButton.onclick = () => {
        const passwordToCopy = passwordOutput.value;
        copyToClipboard(passwordToCopy);
    }

};
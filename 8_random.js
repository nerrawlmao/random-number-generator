//const submitBtn = document.getElementById('submit');
//let ratio = document.getElementById('ratio');
const submitBtn = document.getElementById('submit');
const result = document.getElementById('result');
const pleaseLabel = document.getElementById('please');



submitBtn.onclick = function(){
    let minVal = document.getElementById('min').value;
    let maxVal = document.getElementById('max').value;
    minVal = Number(minVal);
    maxVal = Number(maxVal);
    let randomNum = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    if(isNaN(minVal) || isNaN(maxVal) || minVal >= maxVal){
        pleaseLabel.textContent = "Please input a valid ratio!";
        result.textContent = "?";
    }
    else{
        pleaseLabel.textContent = "";
        result.textContent = randomNum;
    }
    
}
/*
window.onload = function() {
    function adjustFontSize(element) {
        let parentWidth = element.parentElement.offsetWidth;
        let elementWidth = element.offsetWidth;
        
        while (elementWidth > parentWidth * 0.9 && parseFloat(window.getComputedStyle(element).fontSize) > 10) {
            let fontSize = parseFloat(window.getComputedStyle(element).fontSize);
            element.style.fontSize = (fontSize - 1) + 'px';
            elementWidth = element.offsetWidth;
        }
    }

    const resultElement = document.getElementById('result');

    document.getElementById('submit').onclick = function() {
        let minVal = document.getElementById('min').value;
        let maxVal = document.getElementById('max').value;
        minVal = Number(minVal);
        maxVal = Number(maxVal);
        let randomNum = Math.ceil(Math.random() * (maxVal - minVal + 1)) + minVal - 1;

        if (isNaN(randomNum)) {
            resultElement.textContent = "?";
        } else {
            resultElement.textContent = randomNum;
        }

        adjustFontSize(resultElement);
    };
};
*/






















    
/*
document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById('submit');
    const result = document.getElementById('result');
    const ratioInput = document.getElementById('ratio');

    submitBtn.onclick = function() {
        // Get the ratio from the input field
        const ratio = ratioInput.value;
        const parts = ratio.split('-');
        
        if (parts.length === 2) {
            const min = parseInt(parts[0].trim());
            const max = parseInt(parts[1].trim());

            if (!isNaN(min) && !isNaN(max) && min < max) {
                // Generate a random number within the given range
                const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
                // Display the result
                result.textContent = randomNum;
            } else {
                result.textContent = "Invalid range. Please enter a valid number ratio like 55-100.";
            }
        } else {
            result.textContent = "Invalid format. Please enter a valid number ratio like 55-100.";
        }
    }
});

*/
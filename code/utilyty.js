function inputData(input){
    const innerinput = document.getElementById(input);
    const innerText = innerinput.value;
    const data=parseFloat(innerText);
    return data;

}
function output(getElement, innerText){
    const result = document.getElementById(getElement);
    result.innerText=innerText;

}
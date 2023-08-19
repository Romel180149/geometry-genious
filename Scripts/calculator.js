
function calculateTriangleArea(){
//    get triangle base value
const baseField = document.getElementById('traiangle-base');
const baseValueText = baseField.value ;
const base = parseFloat(baseValueText);
console.log(base);

//
const heightField = document.getElementById('traingle-height');
const heightValueText = heightField.value;
const height = parseFloat(heightValueText);

console.log(height);
const area = 0.5*base*height;
console.log(area);
// 
const areaSpan = document.getElementById('triangle-area') ;
areaSpan.innerText = area;
}
function calculateRectangleArea(){
    // console.log('rec');
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);
    // 
    const lengthField = document.getElementById('rectangle-length');
    const lengthValuetext = lengthField.value;
    const length = parseFloat(lengthValuetext);
    console.log(length);
    // 
    const area = width*length;
    // 
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
 
   
}
 // reusable function reduce duplicate 
function calculateParallelogramArea(){
    const base  = getInputValue('parallelogram-base')
    console.log(base);
    const height = getInputValue('parallelogram-height');
    console.log(height);
    const area = base*height;
    setElementInnerText('parallelogram-area',area)
}
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
    
}
// reusable set span ,p ,div , etc text
function setElementInnerText(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}


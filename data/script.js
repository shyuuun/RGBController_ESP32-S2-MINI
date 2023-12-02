const redSlider = document.getElementById('redSlider');
const blueSlider = document.getElementById('blueSlider');
const greenSlider = document.getElementById('greenSlider');

const red = document.getElementById('box-color-text-red');
const blue = document.getElementById('box-color-text-blue');
const green = document.getElementById('box-color-text-green');

const box = document.querySelector('.box-color');

const randomBtn = document.querySelector('#randomBtn');



const updateBoxColor = () => {
    const redVal = redSlider.value;
    const blueVal = blueSlider.value;
    const greenVal = greenSlider.value;

    box.style.backgroundColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
    
    red.innerHTML = redVal;
    blue.innerHTML = blueVal;
    green.innerHTML = greenVal;

};

const randomizeColor = () => {
    const redVal = Math.floor(Math.random() * 256);
    const blueVal = Math.floor(Math.random() * 256);
    const greenVal = Math.floor(Math.random() * 256);

    box.style.backgroundColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
    
    redSlider.value = redVal;
    blueSlider.value = blueVal;
    greenSlider.value = greenVal;
    
    red.innerHTML = redVal;
    blue.innerHTML = blueVal;
    green.innerHTML = greenVal;

}

updateBoxColor();


randomBtn.addEventListener('click', randomizeColor);
redSlider.addEventListener('input', updateBoxColor);
blueSlider.addEventListener('input', updateBoxColor);
greenSlider.addEventListener('input', updateBoxColor);


/*
red.innerHTML = redSlider.value;
blue.innerHTML = blueSlider.value;
green.innerHTML = greenSlider.value;

redSlider.addEventListener('input', ()=> {
    red.innerHTML = redSlider.value;
    const redVal = redSlider.value;
    console.log("red:", redVal);
});

blueSlider.addEventListener('input', ()=> {
    blue.innerHTML = blueSlider.value;
});

greenSlider.addEventListener('input', ()=> {
    green.innerHTML = greenSlider.value;
});

*/






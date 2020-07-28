//Select the elements on the page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton= document.querySelector('.shake');

//Set up our canvas for drawing

//make a variable called width, height from the same 
//properties on our canvas
const {  width, height } = canvas;
const x = Math.floor(Math.random() * width);
const y = Math.floor(Math.random() * height);

//create random x and y starting points on the canvas 



console.log(width, height);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10; 

//Start drawing
ctx.beginPath(); 
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();

//write a draw function




//write a handler for the keys
function handleKey(e){
    if (e.key.includes('Arrow')){
        //e.preventDefault();
        console.log('Handling key')
        console.log(e.key);

    }
}


//clear the shake function


//Listen for arrow keys
window.addEventListener('keydown', handleKey);
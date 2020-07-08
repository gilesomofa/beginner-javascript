// Make a div
const wrapperDiv = document.createElement("div");
// add a class of wrapper to it
wrapperDiv.classList.add("wrapper");
// put it into the body
document.body.appendChild(wrapperDiv);

// make an unordered list
const ul = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>`;
// add three list items with the words "one, two three" in them

// put that list into the above wrapper
wrapperDiv.innerHTML = ul;
// create an image
const anImage = document.createElement("img");

// set the source to an image
anImage.src = "https://picsum.photos/500";

// set the width to 250
anImage.width = "250";
anImage.height = "250";
// add a class of cute
anImage.classList.add("cute");
// add an alt of Cute Puppy
anImage.alt = "Cute Puppy";

// Append that image to the wrapper
wrapperDiv.appendChild(anImage);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
<div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
</div>`;
const ulElement = wrapperDiv.querySelector("ul");
console.log(ulElement);
// put this div before the unordered list from above
ulElement.insertAdjacentHTML("beforebegin", myHTML);
// add a class to the second paragraph called warning
const myDiv = wrapperDiv.querySelector(".myDiv");
console.log(myDiv);
myDiv.children[1].classList.add("warning");
// remove the first paragraph
myDiv.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = ` 
<div class="playerCard">  
<h2>${name}-${age}</h2>
<p>Their height is ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
<button class="delete" type= "button">&times;Delete</button>
</div>`;

  return html;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// Have that function make 4 cards
let cardsHTML = generatePlayerCard('Giles', 150, 45);
cardsHTML += generatePlayerCard('Bob', 45, 134);
cardsHTML += generatePlayerCard('Aaron', 45, 134);
cardsHTML += generatePlayerCard('Karley', 45, 134);
cards.innerHTML = cardsHTML;
wrapperDiv.insertAdjacentElement('beforebegin', cards)




// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const buttons = document.querySelectorAll('.delete')
// select all the buttons!
function removeCard(event){
    console.log(event);
    const clickedButton = event.currentTarget;
    clickedButton.parentElement.remove();

}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', removeCard) );
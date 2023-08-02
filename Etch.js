//Math
const L = 640;
const W = 640;
const Area = L * W;
let row = 16;
let length_box = L/row;
let numb_box = Area/(length_box*length_box);


// Create container 1 using DOM.
const div_container = document.createElement("div");
document.body.appendChild(div_container);
div_container.classList.add("container");


//css styles
div_container.style.display = "inline-flex";
div_container.style.flexWrap = "wrap";

div_container.style.width = "640px";
div_container.style.height = "640px";

div_container.style.margin = "200px";
div_container.style.marginTop = "0px";
div_container.style.marginLeft = "600px";


// create children of container 1 using DOM.

function childDivone() {

const div_one = document.createElement("div");
div_one.classList.add("box");
div_container.appendChild(div_one);
 

// css styles for child containers Divs.
div_one.style.backgroundColor = "white";
div_one.style.width = `${length_box}px`;
div_one.style.height = `${length_box}px`;
div_one.style.border = "solid black";
div_one.style.boxSizing = "border-box";

};

// Use For Loop to create the child container Divs.

for (i=1; i<=numb_box; i++) {

    childDivone();
    
    };


// EventListener to create the hover effect.
        
 let box = document.querySelectorAll(".box");
        
 box.forEach(box => box.addEventListener('mouseover', () => {
     box.style.backgroundColor = "pink";
 }));

 // create button

const btn = document.createElement("button");
document.body.appendChild(btn);
btn.textContent = "Change Grid";
btn.style.height = "70px";
btn.style.width = "200px";

//EventListener 2 

btn.addEventListener('click', () => {
    let result = prompt("Change the Grid Dimension. Enter a number between 1-100");
    
// Everything down below with the exception of "EventListener 1" is from CHATGPT everything else I constructed without help.

    // Validate the input to ensure it's a number between 1 and 100
    if (!isNaN(result) && result >= 1 && result <= 100) {
        row = Number(result); // Convert the input to a number and update the 'row' variable
        length_box = L / row; // Recalculate 'length_box' based on the new 'row'
        numb_box = Area / (length_box * length_box); // Recalculate 'numb_box' based on the new 'length_box'
        
        // Remove the previous boxes
        const existingBoxes = document.querySelectorAll(".box");
        existingBoxes.forEach(box => box.remove());
        
        // Create the new boxes with the updated dimensions.
        for (i = 1; i <= numb_box; i++) {
            childDivone();
        }
    } else {
        alert("Invalid input. Please enter a number between 1-100.");
    }

    // Add EventListener 1 again for the new boxes with updated dimensions.
        
    let box = document.querySelectorAll(".box");
        
    box.forEach(box => box.addEventListener('mouseover', () => {
     box.style.backgroundColor = "pink";
 }));
});









// container 1
const div_container = document.createElement("div");
document.body.appendChild(div_container);
div_container.classList.add("container");


//css styles
div_container.style.display = "inline-flex";
div_container.style.flexWrap = "wrap";
div_container.style.width = "690px";
div_container.style.height = "640x";
div_container.style.margin = "200px";
div_container.style.marginTop = "0px";
div_container.style.marginLeft = "600px";


//children of container 1
function childDivone() {
const div_one = document.createElement("div");
div_one.classList.add("box");
div_container.appendChild(div_one);


// css styles
div_one.style.backgroundColor = "white";
div_one.style.width = "38px";
div_one.style.height = "38px";
div_one.style.border= "solid black";

};

// ======================================

//loop to create children boxes

for (i=1; i<=224; i++) {

    childDivone();
    
    };

// EventListener

let box = document.querySelectorAll(".box");

box.forEach(box => box.addEventListener('mouseover', () => {
    box.style.backgroundColor = "pink";
}));

// button
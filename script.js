let gridContainer = document.querySelector(".grid-container")
let btnPrompt;

function pixelsPerPage(){
  let screenArea = window.outerWidth * window.outerHeight;
  let pixelArea = btnPrompt ** 2;
  let howManyPixels = (screenArea / pixelArea);
  return howManyPixels
}

function createDivs(){
    for(let i = 0; i < pixelsPerPage(); i++){
      let squareDivs = document.createElement('div');
      squareDivs.classList.add('squareDivs')
      squareDivs.style.cssText ="float:right;margin:0px";
      squareDivs.style.width = btnPrompt;
      squareDivs.style.height = btnPrompt;
      gridContainer.appendChild(squareDivs);
    }
    [...gridContainer.children].forEach(child => {
         child.addEventListener("mouseover", (e) => {
           child.style.backgroundColor = "black";
         })
    })
  document.body.appendChild(gridContainer)
}
let pixelSize;

function changeSize(){
  btnPrompt = prompt("Choose the size of the brush", "10");
  pixelSize = parseInt(btnPrompt);
  pixelsPerPage();
  createDivs();
};


document.getElementById("sizebtn").addEventListener("click", changeSize())

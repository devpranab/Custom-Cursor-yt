//Select element

let moveCursor = document.querySelector(".cursor");

window.addEventListener("mousemove", movingFunction);

function movingFunction(e){
   //console.log(e);
   moveCursor.style.top = e.pageY + "px";
   moveCursor.style.left = e.pageX + "px";

}

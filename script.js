//Select element

let moveCursor = document.querySelector(".cursor");
let menuall = document.querySelectorAll(".menu ul li");
console.log(menuall);

window.addEventListener("mousemove", movingFunction);

function movingFunction(e){
   //console.log(e);
   moveCursor.style.top = e.pageY + "px";
   moveCursor.style.left = e.pageX + "px";

}

menuall.forEach(link =>{
    //mouseover
    link.addEventListener("mouseover", function(){
        moveCursor.classList.add("growhover");
    });
    //mouseleave
    link.addEventListener("mouseleave", function(){
        moveCursor.classList.remove("growhover");
    })
});

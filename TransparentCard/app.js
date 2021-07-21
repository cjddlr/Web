class app {
  constructor() {
    
  }
}

dragElement(document.getElementById("card"));

function dragElement(element){
  var pos1 = 0;
  var pos2 = 0;
  var pos3 = 0;
  var pos4 = 0;

  if(document.getElementById(element.id)){
    document.getElementById(element.id).onmousedown = drageMouseDown;
  } else {
    element.onmousedown = dragMouseDown;
  }

  function drageMouseDown(e) {
    e = e || window.event;
    e.preventDefault(); //드래그 시 발생하는 디폴트 효과를 없앰
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;

    document.getElementById("card").id = "card2";
    console.log('down');
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
  
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX; //clientx,y : 마우스 좌표
    pos4 = e.clientY;
  
    element.style.top = (element.offsetTop - pos2) + "px";  
    element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;

    document.getElementById("card2").id = "card";

    console.log('up');
  }
}

window.onload = () => {
  new app(); 
 }
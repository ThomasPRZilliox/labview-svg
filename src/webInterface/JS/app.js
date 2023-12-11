var map = document.querySelector('#map')
var paths = document.querySelectorAll('.map__image a')

const socket = new WebSocket('ws://localhost:8000');

socket.addEventListener('open', function (event) {
  console.log('WebSocket connection opened.');
});

socket.addEventListener('message', function (event) {
  console.log(event.data);
  if(event.data=="stop"){
    socket.send("au revoir");
  }
});

socket.addEventListener('close', function (event) {
  console.log('WebSocket connection closed.');
});

paths.forEach(function (path) {
  path.addEventListener('click',function(e) {
    console.log(path.id + " ou " + path.getAttribute("xlink:title"))
    socket.send(path.id + " ; " + path.getAttribute("xlink:title"));
  });
});


// Ensure that the User can not use a right click
document.addEventListener("contextmenu", function(event) {
  event.preventDefault();
});
// Importa la biblioteca fabric.js
import fabric from "fabric";

// Crea un objeto canvas
const canvas = document.getElementById("canvas");

// Crea un objeto context2d
const ctx = canvas.getContext("2d");

// Crea un objeto image para cada ranger
const redRanger = new fabric.Image({
  src: "red_ranger.png",
  width: 50,
  height: 50,
});
const greenRanger = new fabric.Image({
  src: "green_ranger.png",
  width: 50,
  height: 50,
});
const yellowRanger = new fabric.Image({
  src: "yellow_ranger.png",
  width: 50,
  height: 50,
});
const pinkRanger = new fabric.Image({
  src: "pink_ranger.png",
  width: 50,
  height: 50,
});
const blueRanger = new fabric.Image({
  src: "blue_ranger.png",
  width: 50,
  height: 50,
});

// Añade los rangers al canvas
canvas.add(redRanger);
canvas.add(greenRanger);
canvas.add(yellowRanger);
canvas.add(pinkRanger);
canvas.add(blueRanger);

// Asigna eventos a las teclas
document.addEventListener("keydown", function(event) {
  switch (event.keyCode) {
    case 82: // R
      redRanger.show();
      break;
    case 71: // G
      greenRanger.show();
      break;
    case 89: // Y
      yellowRanger.show();
      break;
    case 80: // P
      pinkRanger.show();
      break;
    case 66: // B
      blueRanger.show();
      break;
  }
});

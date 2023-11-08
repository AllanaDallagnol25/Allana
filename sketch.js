let cor;
let posicaoHorizontal;
let posicaVertical;


function setup() {
  createCanvas(400, 400);
  background("blue")
  cor=color(random(0,255), random(0,255), random(0,255));
  posicaoHorizontal = 200
  posicaoVertical = 200
}

function draw() {
  if(mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0255));
  }
 fill (cor);
  circle(posicaoHorizontal, posicaoVertical, 25);
  
  if(mouseX > posicaoHorizontal){
    posicaoHorizontal--;
  }
  if(mouseX < posicaoHorizontal){
    posicaoHorizontal++;
  }
 if (mouseY > posicaoVertical){
   posicaoVertical--;
 }
 if(mouseY < posicaoVertical){
   posicaoVertical++;
 }
}

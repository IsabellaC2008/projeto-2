let cor;
let posicaoHorizontal;//x
let posicaoVertical;//y
function setup() {
  createCanvas(400, 400);
  background ("rgb(224,57,86)")
  cor = color(random(0,255), random (0,255), random (0,255)); //rgb red,green, blue, nmrs de 0-250
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  circle(30,30,20)
  
}
function draw () {
  fill(cor ); //desenha o fundo
  circle(posicaoHorizontal, posicaoVertical,50);
  
  if(mouseX < posicaoHorizontal) {
      posicaoHorizontal--;
  }
  
  if (mouseX > posicaoHorizontal){
    posicaoHorizontal++;
  }
  if(mouseY < posicaoVertical) {
      posicaoVertical--;
  }
  
  if (mouseY > posicaoVertical){
    posicaoVertical++;
  }

if (mouseIsPressed) {
  cor = color(random(0,255), random (0,255), random (0,255), random(0,100));
}
}
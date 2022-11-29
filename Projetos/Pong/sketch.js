//variaveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 16;
let raio = diametro/2;

//variaveis velocidade bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let cRaquete = 10
let aRaquete = 90
let bRaquete = 10

//variaveis da raquete 
let xRaquete = 5
let yRaquete = 150
//variaveis do oponete
let xRaqueteOponente = 585
let yRaqueteOponente = 150
//colisao
let colidiu = false;
//placares
let meusPontos = 0
let pontosDoOponente = 0
function setup() {
  createCanvas(600,400);
}
function draw() {
  background(0);
  mostraBolinha()
  movimentaBolinha()
  verificarColisaoBorder()
  mostrarRaquete()
  movimentaMinhaRaquete()
  //verificaColisaoComRaquete()
  verificaColisaoRaquete(xRaquete,yRaquete)
  mostrarRaqueteOponente()
  movimentaRaqueteOponente()
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
  incluiPlacar()
  marcaPonto()
  bolinhaNaoFicaPresa()
  
}
function mostraBolinha() {
  circle(xBolinha,yBolinha, diametro);
}
function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function verificarColisaoBorder() {
    if  (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if  (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}
function mostrarRaquete() {
  rect(xRaquete, yRaquete, cRaquete, aRaquete, bRaquete)
}
function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
/*function verificaColisaoComRaquete() {
  if (xBolinha - raio < xRaquete + cRaquete && yBolinha-raio < yRaquete + aRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1
  }
}*/
function verificaColisaoRaquete(x, y) {
  colidiu= collideRectCircle(x,y,cRaquete,aRaquete, xBolinha, yBolinha,raio)
  if(colidiu){
    velocidadeXBolinha *= -1
  }
}
function mostrarRaqueteOponente() {
  rect(xRaqueteOponente, yRaqueteOponente, cRaquete, aRaquete, bRaquete)
}
function movimentaRaqueteOponente(){
  if(keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
}
 /*function colisaoMinhaRaqueteOponenteBiblioteca()
{ colidiu= collideRectCircle(xRaqueteOponente,yRaqueteOponente,cRaquete,aRaquete, xBolinha, yBolinha,raio)
  if(colidiu){
    velocidadeXBolinha *= -1
  }
} */
function incluiPlacar(){
  textAlign(CENTER)
  textSize(18)
  fill(color(255,140,0))
  rect(150,10,40,20,5)
  fill(255)
  text(meusPontos, 170,26)
  fill(color(255,140,0))
  rect(450,10,40,20, 5)
  fill(255)
  text(pontosDoOponente, 470,26)
}
function marcaPonto() {
  if(xBolinha > 590){
    meusPontos += 1
  }
  if(xBolinha < 10){
    pontosDoOponente += 1
  }
}
function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
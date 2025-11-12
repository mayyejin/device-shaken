//핸드폰 센서 가져오기
let bgcolor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  setShakeThreshold(30); //얼마나 많이 흔들어야 값이 변할 것인가. 값이 커질수록 세게 흔들어야 변화가 생김.
  bgcolor = color(255);

  activeBtn = createButton("Activate Sensors");
  activeBtn.position(30, 40);
  activeBtn.mousePressed(activateSEnosrs);
}

function draw() {
  background(255);
}

function deviceShaken() {
  bgcolor = color(random(255), random(255), random(255));
}

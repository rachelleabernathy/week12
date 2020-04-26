let sound, amplitude;

function preload(){
  sound = loadSound('sound/bells.wav');
  soundTwo = loadSound('sound/sos.wav');
  soundThree = loadSound('sound/street.wav')
}

function setup() {
  createCanvas(800, 600);
  amplitude = new p5.Amplitude();
  amplitude.setInput(sound);

  amplitudeTwo = new p5.Amplitude();
  amplitudeTwo.setInput(soundTwo);

  amplitudeThree = new p5.Amplitude();
  amplitudeThree.setInput(soundThree);
}

function draw() {
  let level = amplitude.getLevel();
  let size = map(level, 0, 40, 0, 100);
  fill('orange');
  noStroke();
  rect(0, 0, 200, 200);
  ellipse(width/2, height/2, size, size);

  let levelTwo = amplitudeTwo.getLevel();
  let sizeTwo = map(level, 0, 40, 0, 100);
  fill('teal');
  noStroke();
  rect(200, 0, 400, 200);
  ellipse(width/2, height/2, sizeTwo, sizeTwo);

  let levelThree = amplitudeThree.getLevel();
  let sizeThree = map(level, 0, 40, 0, 100);
  fill('plum');
  noStroke();
  rect(400, 0, 600, 200);
  ellipse(width/2, height/2, sizeThree, sizeThree);
}

function mousePressed() {
    if ((mouseX >= 0 && mouseX <= 200) && (mouseY >= 0 && mouseY <= 200)) {
        sound.play()
    }

    if ((mouseX >= 200 && mouseX <= 400) && (mouseY >= 0 && mouseY <= 200)) {
        soundTwo.play()
    }
}

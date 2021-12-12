// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

var freq_slider
var amplitude_slider
var octave_slider
var time_slider

var canvasWidth = 800

function setup() {
  createCanvas(canvasWidth, 480)

  // rectMode(CENTER)

  let p = createP('scale')
  p.position(canvasWidth + 20, 20)

  freq_slider = createSlider(10, 50, 20)
  freq_slider.position(canvasWidth + 20, 55)

  p = createP('x')
  p.position(canvasWidth + 20, 80)

  amplitude_slider = createSlider(0, 500, 100)
  amplitude_slider.position(canvasWidth + 20, 115)

  p = createP('Octaves')
  p.position(canvasWidth + 20, 140)
  p.style('display', 'none')

  octave_slider = createSlider(10, 80, 30)
  octave_slider.position(canvasWidth + 20, 175)
  octave_slider.style('display', 'none')

  p = createP('time')
  p.position(canvasWidth + 20, 140)
  // p.style('display', 'none')

  time_slider = createSlider(0, 1000, 0)
  time_slider.position(canvasWidth + 20, 175)
  // time_slider.style('display', 'none')

  animate_checkbox = createCheckbox('Animate Noise', false)
  animate_checkbox.position(canvasWidth + 20, 270)
  animate_checkbox.style('display', 'none')
}

function draw() {
  background(0)
  ellipseMode(CENTER)
  var frequency = freq_slider.value() / 5000
  var amplitude = amplitude_slider.value() / 100
  var time = time_slider.value()
  noiseDetail(octave_slider.value() / 10, 0.5)

  // draw function plot
  // fill(240)

  beginShape()
  for (var x = 0; x < width; x += 5) {
    let n

    if (animate_checkbox.checked()) {
      n = noise(x * frequency, frameCount * 0.01)
    } else {
      n = noise(x * frequency + amplitude, time * 0.01)
    }

    n = n * height
    noStroke()
    fill('red')
    if (x % 10 == 0) ellipse(x, height - n, 5, 5)
    noFill()
    stroke('pink')
    vertex(x, height - n)
  }
  endShape()
  // noLoop()
}

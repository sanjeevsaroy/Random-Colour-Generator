$('.randomise-btn').click(function() {
  getRandomColour();
});

function getRandomColour() {

  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let rgb = {
    red: red,
    green: green,
    blue: blue
  }

  setColour(rgb);
}

function setColour(rgb) {

  let cssValue = 'rgb('+rgb.red+','+rgb.green+','+rgb.blue+')';
  $('body').css('background-color', cssValue);
}

// Set a random colour on load
getRandomColour();

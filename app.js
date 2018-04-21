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

  let textColour = getReadableColour(rgb);
  $('h1').css('color', textColour);
}

function getReadableColour(rgb) {
  let brightness = Math.round(((parseInt(rgb.red * 299)) + (parseInt(rgb.green * 587)) * (parseInt(rgb.blue * 114)) / 1000));
  let textColour = (brightness < 1000000) ? 'white' : 'black';

  return textColour;
}

// Set a random colour on load
getRandomColour();

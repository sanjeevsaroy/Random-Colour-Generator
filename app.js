let hexValue;

$('.randomise-btn').click(function() {
  let rgb = getRandomColour();
  setColour(rgb);
  convertRGBtoHex(rgb);
});

function getRandomColour() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  return rgb = {
    red: red,
    green: green,
    blue: blue
  }
}

function setColour(rgb) {
  let cssValue = 'rgb('+rgb.red+','+rgb.green+','+rgb.blue+')';
  $('body').css('background-color', cssValue);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function convertRGBtoHex(rgb) {
  hexValue = componentToHex(rgb.red) + componentToHex(rgb.green) + componentToHex(rgb.blue);
}

// Set a random colour on load
$('.randomise-btn').trigger("click");

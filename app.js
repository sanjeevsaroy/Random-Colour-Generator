let hexValue;

$('.randomise-btn').click(function() {
  let rgb = getRandomColour();
  setBackgroundColour(rgb);
  hexValue = getHexValue(rgb);
  $('.hex-value').text(hexValue);
});

// Copy the hex value to clipboard
$('.copy-hex-btn').click(function() {
  var textArea = document.createElement("textarea");
  textArea.value = hexValue;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
});

// Get a random colour in RGB format
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

// Set the background colour of the page
function setBackgroundColour(rgb) {
  let cssValue = 'rgb('+rgb.red+','+rgb.green+','+rgb.blue+')';
  $('body').css('background-color', cssValue);
}

// Convert a number to hexadecimal
function convertToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

// Get the hex value of a colour from an RGB format
function getHexValue(rgb) {
  return convertToHex(rgb.red) + convertToHex(rgb.green) + convertToHex(rgb.blue);
}

// Set a random colour on page load
$('.randomise-btn').trigger("click");

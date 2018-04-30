// Properties
let hexValue;
let rgbValue;
let isNightMode = false;

let white = "#fff";
let darkGray = "#2f2f2f";

const brightnessLimit = 125;

let body = $('body');
let nightModeLabel = $('.night-mode-label');

// Buttons
let nightModeButton = $('.night-mode-btn');
let randomiseButton = $('.randomise-btn');
let copyHexButton = $('.copy-hex-btn');

// Toggle night mode
nightModeButton.click(function() {
  if (isNightMode) {
    isNightMode = false;
    nightModeLabel.text("Off");

    setBackgroundColour(hexValue, body);
    setBackgroundColour(white, nightModeButton, randomiseButton, copyHexButton);
    setTextColour(darkGray, nightModeButton, randomiseButton, copyHexButton);
  }
  else {
    isNightMode = true;
    nightModeLabel.text("On");

    setBackgroundColour(darkGray, body);
    setBackgroundColour(hexValue, nightModeButton, randomiseButton, copyHexButton);
    determineTextColour();
  }
});

// Get a random colour and assign it to the background
randomiseButton.click(function() {
  rgbValue = getRandomColour();
  hexValue = getHexValue(rgbValue);

  if (isNightMode) {
    setBackgroundColour(hexValue, nightModeButton, randomiseButton, copyHexButton);
    determineTextColour();
  }
  else {
    setBackgroundColour(hexValue, body);
    setTextColour(darkGray, nightModeButton, randomiseButton, copyHexButton);
  }

  copyHexButton.text("Copy hex value to clipboard");
});

// Copy the hex value to clipboard
copyHexButton.click(function() {
  var textArea = document.createElement("textarea");
  textArea.value = hexValue;
  document.body.appendChild(textArea);
  textArea.select();
  let copied = document.execCommand("Copy");
  textArea.remove();

  if (copied) {
    copyHexButton.text("Copied!");
  }
});

// Determine the colour of text based on the colour brightness
function determineTextColour() {
  let brightness = getBrightness(rgbValue);

  if (brightness <= brightnessLimit) {
    setTextColour(white, nightModeButton, randomiseButton, copyHexButton);
  }
  else {
    setTextColour(darkGray, nightModeButton, randomiseButton, copyHexButton);
  }
}

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

// Set the background colour of elements
function setBackgroundColour(val, ...elements) {
  for (e of elements) {
    e.css('background-color', val);
  }
}

// Set the text colour of elements
function setTextColour(val, ...elements) {
  for (e of elements) {
    e.css('color', val);
  }
}

// Convert a number to hexadecimal
function convertToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

// Get the hex value of a colour from an RGB format
function getHexValue(rgb) {
  return "#" + convertToHex(rgb.red) + convertToHex(rgb.green) + convertToHex(rgb.blue);
}

// Get the brightness of a colour
function getBrightness(c) {
  return Math.sqrt(
     c.red * c.red * .241 +
     c.green * c.green * .691 +
     c.blue * c.blue * .068
   );
}

// Set a random colour on page load
randomiseButton.trigger("click");

// Properties
let hexValue;
let isNightMode = false;

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

    let white = "#fff";

    setBackgroundColour(hexValue, body);
    setBackgroundColour(white, nightModeButton, randomiseButton, copyHexButton);
  }
  else {
    isNightMode = true;
    nightModeLabel.text("On");

    let darkGray = "#2f2f2f";

    setBackgroundColour(darkGray, body);
    setBackgroundColour(hexValue, nightModeButton, randomiseButton, copyHexButton);
  }
});

// Get a random colour and assign it to the background
randomiseButton.click(function() {
  let rgb = getRandomColour();
  hexValue = getHexValue(rgb);

  if (isNightMode) {
    setBackgroundColour(hexValue, nightModeButton, randomiseButton, copyHexButton);
  }
  else {
    setBackgroundColour(hexValue, body);
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

// Convert a number to hexadecimal
function convertToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

// Get the hex value of a colour from an RGB format
function getHexValue(rgb) {
  return "#" + convertToHex(rgb.red) + convertToHex(rgb.green) + convertToHex(rgb.blue);
}

// Set a random colour on page load
randomiseButton.trigger("click");

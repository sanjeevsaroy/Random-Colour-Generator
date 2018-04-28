// Properties
let hexValue;
let isNightMode = false;

// Buttons
let nightModeButton = $('.night-mode-btn');
let randomiseButton = $('.randomise-btn');
let copyHexButton = $('.copy-hex-btn');

// Toggle night mode
nightModeButton.click(function() {
  if (isNightMode) {
    isNightMode = false;
    $('body').css('background-color', "#"+hexValue);
    nightModeButton.css('background-color', "white");
    randomiseButton.css('background-color', "white");
    copyHexButton.css('background-color', "white");
  }
  else {
    isNightMode = true;
    $('body').css('background-color', "#2d2d2d");
    nightModeButton.css('background-color', "#"+hexValue);
    randomiseButton.css('background-color', "#"+hexValue);
    copyHexButton.css('background-color', "#"+hexValue);
  }
});

// Get a random colour and assign it to the background
randomiseButton.click(function() {
  let rgb = getRandomColour();

  if (isNightMode) {
    let cssValue = 'rgb('+rgb.red+','+rgb.green+','+rgb.blue+')';
    nightModeButton.css('background-color', cssValue);
    randomiseButton.css('background-color', cssValue);
    copyHexButton.css('background-color', cssValue);
  }
  else {
    setBackgroundColour(rgb);
  }

  hexValue = getHexValue(rgb);
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
randomiseButton.trigger("click");

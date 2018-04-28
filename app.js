let hexValue;
let isNightMode = false;

// Toggle night mode
$('.night-mode-btn').click(function() {
  if (isNightMode) {
    isNightMode = false;
    $('body').css('background-color', "#"+hexValue);
    $('.night-mode-btn').css('background-color', "white");
    $('.randomise-btn').css('background-color', "white");
    $('.copy-hex-btn').css('background-color', "white");
  }
  else {
    isNightMode = true;
    $('body').css('background-color', "#2d2d2d");
    $('.night-mode-btn').css('background-color', "#"+hexValue);
    $('.randomise-btn').css('background-color', "#"+hexValue);
    $('.copy-hex-btn').css('background-color', "#"+hexValue);
  }
});

// Get a random colour and assign it to the background
$('.randomise-btn').click(function() {
  let rgb = getRandomColour();

  if (isNightMode) {
    let cssValue = 'rgb('+rgb.red+','+rgb.green+','+rgb.blue+')';
    $('.night-mode-btn').css('background-color', cssValue);
    $('.randomise-btn').css('background-color', cssValue);
    $('.copy-hex-btn').css('background-color', cssValue);
  }
  else {
    setBackgroundColour(rgb);
  }

  hexValue = getHexValue(rgb);
  $('.copy-hex-btn').text("Copy hex value to clipboard");
});

// Copy the hex value to clipboard
$('.copy-hex-btn').click(function() {
  var textArea = document.createElement("textarea");
  textArea.value = hexValue;
  document.body.appendChild(textArea);
  textArea.select();
  let copied = document.execCommand("Copy");
  textArea.remove();

  if (copied) {
    $('.copy-hex-btn').text("Copied!");
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
$('.randomise-btn').trigger("click");

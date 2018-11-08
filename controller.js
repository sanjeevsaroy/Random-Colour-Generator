app.controller("controller", function($scope) {
    $scope.hexValue = getRandomColour(),
    $scope.onRandomColourClick = function() {
      $scope.hexValue = getRandomColour();
    },
    $scope.onCopyClick = function() {
      copyToClipboard($scope.hexValue);
    };
});

let randomiseButton = $('.randomise-btn'),
    copyHexButton = $('.copy-hex-btn');

// Get a random colour in RGB format
function getRandomColour() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let rgb = {
    red: red,
    green: green,
    blue: blue
  }

  return getHexValue(rgb);
}

// Get the hex value of a colour from an RGB format
function getHexValue(rgb) {
  return "#" + convertToHex(rgb.red) + convertToHex(rgb.green) + convertToHex(rgb.blue);
}

// Convert a number to hexadecimal
function convertToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

// Copy colour to the clipboard
function copyToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  let copied = document.execCommand("Copy");
  textArea.remove();

  if (copied) {
    console.log("Copied!");
  }
};

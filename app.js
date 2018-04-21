$('.randomise-btn').click(function() {
  getRandomColour();
});

function getRandomColour() {
  $.ajax({
    url: 'http://www.colr.org/json/color/random',
    dataType: 'json',
    success: function (data, textStatus, jqXHR) {
      let hex = data.colors[0].hex;
      setColour(hex);
    },
    error: function(jqXHR, textStatus, errorThrown) {
     //Error handling code
     alert('Oops there was an error');
    }
   });
}

function setColour(hex) {
  let colour = '#' + hex;
  $('body').css('background-color', colour);

  let invertedColour = invertColour(colour);
  $('h1').css('color', invertedColour);
}

function invertColour(hexTripletColour) {
    var colour = hexTripletColour;
    colour = colour.substring(1);           // remove #
    colour = parseInt(colour, 16);          // convert to integer
    colour = 0xFFFFFF ^ colour;             // invert three bytes
    colour = colour.toString(16);           // convert to hex
    colour = ("000000" + colour).slice(-6); // pad with leading zeros
    colour = "#" + colour;                  // prepend #
    return colour;
}

// Set a random colour on load
getRandomColour();

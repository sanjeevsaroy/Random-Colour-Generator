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
}

// Set a random colour on load
getRandomColour();

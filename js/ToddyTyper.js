/*
Hey there!
ToddyTyper.js
by Brett Thurston
last updated May 27, 2017
http://dapperdesign.me
*/

// Modal functionality
document.onkeypress = function(e) {
  //do the required work
  var x = e.key;
  // Remove call to action in modal div
  $('#removeMe').hide();
  // Append button pressed to modal div
  $(".toddyInput").append("<p class='toddyText'>" + x + "</p>").css('color', 'white');
  // If the text input div is larger than 700px in height, empty it's contents
  if ($('.toddyInput').height() > 700) {
        $('.toddyInput').empty();
  }

};

// Modal functionality
function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

// Modal Open
function openNav() {
  toggleFullScreen();
  document.getElementById("myNav").style.height = "100%";

}

// Modal Close
function closeNav() {
  if (document.cancelFullScreen) {
    document.cancelFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  }
  document.getElementById("myNav").style.height = "0%";
}

//Disable buttons to reduce chance of leaving program prematurely
$(document).ready(function() {
  $(window).keydown(function(event) {
    var x = event.which || event.keyCode;
    // Disable the following buttons 32 = space bar, 13 = enter, 18 = alt, 9 = tab
    if (x == 32 || x == 13 || x == 18 || x == 9) {
      event.preventDefault();
      return false;
    }
      if (x == 8) {
      $('.toddyInput').children().last().remove();
    }
  });
});

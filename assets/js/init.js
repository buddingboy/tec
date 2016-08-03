
var project_box = document.querySelectorAll('.p');

for (var i = 0; i < project_box.length; i++) {
    var j = i + 1;
    var image_url = 'assets/media/p/p' + j + '.jpg';
    project_box[i].style.background = 'url(' + image_url + ')';
    };


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});




$(".grey-box h3").hover(
function(){
  $(this).filter(':not(:animated)').animate({
     paddingTop:'165px'
  },'fast');
// This only fires if the row is not undergoing an animation when you mouseover it
},
function() {
  $(this).animate({
     paddingTop:'175px'
  },'fast');
});

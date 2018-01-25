// get the modal element
var modal1 = document.getElementById('portfolio-modal1');
var modal2 = document.getElementById('portfolio-modal2');
//var modal3 = document.getElementById('portfolio-modal3');
// get open modal button
var modalBtn1 = document.getElementById('portfolio-item1');
var modalBtn2 = document.getElementById('portfolio-item2');
//var modalBtn3 = document.getElementById('portfolio-item3');

document.getElementById('portfolio-item1').onclick = function() {
	modal1.style.display = 'block';
}
document.getElementById('portfolio-item2').onclick = function() {
	modal2.style.display = 'block';
}
/*document.getElementById('portfolio-item3').onclick = function() {
	modal3.style.display = 'block';
}*/
document.getElementsByClassName('closeBtn1')[0].onclick = function() {
	modal1.style.display = 'none';
}
document.getElementsByClassName('closeBtn2')[0].onclick = function() {
	modal2.style.display = 'none';
}
/*document.getElementsByClassName('closeBtn3')[0].onclick = function() {
	modal3.style.display = 'none';
}*/

// listen for outside click
window.addEventListener('click', outsideClick);

// function to close modal if outside click
function outsideClick(e) {
	if (e.target == modal1 || e.target == modal2) {
		modal1.style.display = 'none';
		modal2.style.display = 'none';
	}

}


/* Smooth scrolling*/
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
         /* $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
		};*/
        });
      }
    }
  });

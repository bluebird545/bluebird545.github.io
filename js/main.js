// get the modal element
var modal1 = document.getElementById('portfolio-modal1');
var modal2 = document.getElementById('portfolio-modal2');
var modal3 = document.getElementById('portfolio-modal3');
// get open modal button
var modalBtn1 = document.getElementById('portfolio-item1');
var modalBtn2 = document.getElementById('portfolio-item2');
var modalBtn3 = document.getElementById('portfolio-item3');

document.getElementById('portfolio-item1').onclick = function() {
	modal1.style.display = 'block';
}
document.getElementById('portfolio-item2').onclick = function() {
	modal2.style.display = 'block';
}
document.getElementById('portfolio-item3').onclick = function() {
	modal3.style.display = 'block';
}
document.getElementsByClassName('closeBtn1')[0].onclick = function() {
	modal1.style.display = 'none';
}
document.getElementsByClassName('closeBtn2')[0].onclick = function() {
	modal2.style.display = 'none';
}
document.getElementsByClassName('closeBtn3')[0].onclick = function() {
	modal3.style.display = 'none';
}

// listen for outside click
window.addEventListener('click', outsideClick);

// function to close modal if outside click
function outsideClick(e) {
	if (e.target == modal) {
		
		modal.style.display = 'none';
		
	}
	
}
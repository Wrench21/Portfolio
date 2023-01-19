/* Description: Custom JS file */


/* For Back To Top Button */
window.onscroll = function () {
	scrollFunctionBTT(); // back to top button
};
/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}
// Dark Mode
document.getElementById("toggle").addEventListener("click", function()
{
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});
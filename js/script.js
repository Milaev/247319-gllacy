var feedback=document.querySelector(".feedback-btn");
var feedbackForm=document.querySelector(".feedback-form");
var closeForm=document.querySelector(".feedback-form-close");
var clientName=feedbackForm.querySelector("[name=name]");
var overlay=document.querySelector(".overlay");

feedback.addEventListener("click", function(event) {
	event.preventDefault();
	feedbackForm.classList.add("feedback-form-show");
	clientName.focus();
});

feedback.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.add("overlay-show");
});

closeForm.addEventListener("click", function(close) {
	close.preventDefault();
	feedbackForm.classList.remove("feedback-form-show");
})

closeForm.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(close) {
	if (close.keyCode === 27) {
		if (feedbackForm.classList.contains ("feedback-form-show")) {
			feedbackForm.classList.remove("feedback-form-show");
		}
	}
})

window.addEventListener("keydown", function(close) {
	if (close.keyCode === 27) {
		if (overlay.classList.contains ("overlay-show")) {
			overlay.classList.remove("overlay-show");
		}
	}
})
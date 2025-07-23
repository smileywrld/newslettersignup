const email = document.querySelector(".email");
const errorElement = document.querySelector(".error");
const emailValue = email.value.trim();

const button = document.getElementById("myButton");

button.addEventListener("click", function (event) {
	event.preventDefault();
 
});

function validateMail() {

  let testEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (testEmail.test(emailValue)) {
   errorElement.innerHTML = ""
    window.location.href = "/desktop-success.html";
  }
 
}
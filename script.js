const email = document.querySelector(".email");
const errorElement = document.querySelector(".error");

const button = document.getElementById("myButton");

button.addEventListener("click", validateMail);

let emailValue = "";

errorElement.innerHTML = "";
function validateMail(e) {
	emailValue = email.value;

	localStorage.setItem("email", emailValue);
	e.preventDefault();

	let testEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	if (testEmail.test(emailValue)) {
		setTimeout(() => {
			errorElement.innerHTML = "Email Verified Successfully";
			errorElement.style.color = "green";
			errorElement.style.visibility = "visible";
			console.log("Redirecting...");
			window.location.href = "desktop-success.html";
		}, 500);
	} else {
		setTimeout(() => {
			errorElement.innerHTML = "valid email required";
			errorElement.style.color = "red";
			errorElement.style.visibility = "visible";
		}, 500);
	}
}

export { emailValue, validateMail };

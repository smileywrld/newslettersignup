let userEmail = localStorage.getItem("email");
let regMail = (document.querySelector(".regMail").innerHTML = `${userEmail}`);

function closeTab() {
	window.close();
}

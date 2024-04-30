let userEmail = localStorage.getItem('Email');
let regMail = (document.querySelector('.regMail').innerHTML = `${userEmail}`);

function closeTab() {
  window.close();
}

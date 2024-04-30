// const express = require('express');
// const app = express();

// app.use(express.static('public', { type: 'module' }));

const email = document.querySelector('.email');
const errorElement = document.querySelector('.error');
const emailValue = email.value.trim();

const button = document.getElementById('myButton');
button.addEventListener('click', function (event) {
  event.preventDefault();
  validateMessage();
  let userMail = localStorage.setItem('Email', email.value);
  if (!errorElement.textContent) {
    window.location.href = '/desktop-success.html';
  }
});

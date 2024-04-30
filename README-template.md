# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author]
(#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./Capture001.png)

This is a screenshoot of how it the website looks

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

This project has helped me get more familiar with Javascript function, Local Storage, If statement.
It also helped improve more on my CSS Media Queries

```css
.text-side .text-list li {
  font-family: roboto;
  padding: 7px 0px;
  color: var(--dark);
  list-style-image: url(/assets/images/icon-list.svg);
  font-size: 1.2em;
}
```

```js
function validateMessage() {
  const emailValue = email.value.trim(); // trim function is used to remove any spaces

  if (emailValue === '') {
    errorElement.textContent = 'Enter a valid email';
  } else if (!emailValue.endsWith('@gmail.com')) {
    errorElement.textContent = 'Check your Email Properly';
  } else {
    errorElement.textContent = '';
    window.location.href = '/desktop-success.html';
  }
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

I will want to focus on learning some Javascript and CSS framework, because this will enable me to complete the project on time

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/smy_ley_)

# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference

### Screenshots:
## Desktop Version
![preview](images\calc-dark-mode.png)

## Mobile Version
![preview](images\calc-mobile-version.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla java script
- ES6 syntax

### What I learned
The most of time take the logic of the calculator. It was hard but I learned a lot, next time it's will take less time.
This function for example: take 3 buttons change their classes so the one will visible and another not. The loop going through object that contains property and array of values for the css variables.

```js
 document.querySelectorAll(".btn").forEach((e) => {
    e.addEventListener("click", () => {
      if (tappedTheme !== e.id) {
        document.getElementById(tappedTheme).classList.add("disappearButtons");
        e.classList.remove("disappearButtons");
        
        for (const [key, value] of Object.entries(themes)) {
          r.style.setProperty(key, value[e.id - 1]);
        }
        tappedTheme = e.id;
        console.log(themes["--main-background"][e.id - 1]);
      }
    });
  });
```
I tried to make html short as possible.


### Continued development

I have to learn more css, to make website more responsive and clean.
Ill build more projects to practice more.

### Useful resources

- [stackoverflow](https://stackoverflow.com/) - this helped me with js useful functions and regex pattern to make commas in number
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Helped me when I used flex box



## Author

- Website - [ArseniyX](https://github.com/ArseniyX)
- Frontend Mentor - [@ArseniyX](https://www.frontendmentor.io/profile/ArseniyX)


**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**




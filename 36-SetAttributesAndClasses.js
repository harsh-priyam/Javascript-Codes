// Styles, Attributes and Classes

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.color);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height =
    Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
document.documentElement.style.setProperty('--color-primary', 'orangered');
// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
logo.alt = 'Beautiful minimalist logo';
// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');
console.log(logo.src);
console.log(logo.getAttribute('src'));
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));
// Data attributes
console.log(logo.dataset.versionNumber);
// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes
// Don't use
logo.clasName = 'jonas';
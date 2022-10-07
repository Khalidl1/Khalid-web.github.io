const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.abilities__scroll-percent');
      liners = document.querySelectorAll('.abilities__scroll-over');

counters.forEach( (item, i) => {
    liners[i].style.width = item.innerHTML;
});


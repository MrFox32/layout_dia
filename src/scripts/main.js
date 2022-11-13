'use strict';

const slider = document.getElementById('slider');
const previousLink = document.getElementById('slider-previous-link');
const nextLink = document.getElementById('slider-next-link');
let offset = 0;

function moveLeft() {
  if (offset === 0) {
    offset = 200;

    slider.style.left = -offset + '%';

    return;
  }

  if (offset === 200) {
    offset -= 100;

    slider.style.left = -offset + '%';

    return;
  }

  offset -= 100;

  slider.style.left = -offset + '%';
}

function moveRight() {
  if (offset === 200) {
    slider.style.left = 0;

    offset = 0;

    return;
  }

  if (offset === 0) {
    offset += 100;

    slider.style.left = -offset + '%';

    return;
  }

  offset += 100;

  slider.style.left = -offset + '%';
}

previousLink.addEventListener('click', moveLeft);

nextLink.addEventListener('click', moveRight);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav-menu') {
    document.body.classList.add('page--overflow-hidden');
  } else {
    document.body.classList.remove('page--overflow-hidden');
  }
});

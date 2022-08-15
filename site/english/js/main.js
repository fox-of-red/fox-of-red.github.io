'use strict';

{
  const overlay = document.getElementById('overlay');
  const spMneu = document.getElementById('sp-menu');
  spMneu.addEventListener('click', () => {
    overlay.classList.toggle('show');
    spMneu.classList.toggle('x');
  }
  )
}
'use strict';
{
  function callback(entries,obs) {
    entries.forEach(entry => {
      if (entry.isIntersecting === true) {
        entry.target.classList.add('appear');
        obs.unobserve(entry.target);
      }
    });
  }
  const options = {
    threshold: .8,
  }
  const observer = new IntersectionObserver(callback, options);
  document.querySelectorAll('main > section').forEach(el => {
    observer.observe(el);
  })
}
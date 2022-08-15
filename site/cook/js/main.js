'use strict'
   function callback(entries, obs){
     entries.forEach(entry => {
       if(entry.isIntersecting === true) {
         entry.target.classList.add('appear');
         obs.unobserve(entry.target);
       }
     });
   }
   const options = {
     threshold: .5,
   }
   const observer = new IntersectionObserver(callback, options)
   document.querySelectorAll('#subvisial > li').forEach(el => {
     observer.observe(el);
     
   })

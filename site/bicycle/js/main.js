'use strict';
{
  const mainvisial = document.querySelector('#mainvisial img');
  mainvisial.classList.add('show');
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    })
  }
  const observer = new IntersectionObserver(callback, {
    threshold: .2,
  });
  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  }) 
}



// {
//   // 観察対象
//   const target = document.quetySelector
//   ('img');
//   const targets = document.querySelectorAll('.targets');
// // 交差した時の処理
// // 監視対象は関数の第一引数に渡せる
// // 第二引数でオブザーバーを渡せる
//   function callback(entries) {
//     if(ent)
//   }
//   // 交差後のオプション（時間）
//   const options = {
//     threshold: [
//       .2, .8
//     ],
//     root:,
//     rootMargin:
//   }
//   // オブザーバーを作る
//   // 何を監視するか決める
//   const observer = new IntersectionObserver(callback, options);
//   // 監視が一つ
//   observer.observe(target);
//   // 監視が二つ
//   targets.forEach(target => {
//     observer.observe(target);
//   })
// }
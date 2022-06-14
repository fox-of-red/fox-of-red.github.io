const imgs = document.querySelectorAll('.img')
const contents = [
  {name: 'シクラメン', description: 'これはメンです'},
  {name: 'たんぽぽ', description: 'これはたんぽぽです'},
  {name: 'かすみ草', description: 'これはかすみ草です'},
  {name: 'ひまわり', description: 'これはひまわりです'},
  {name: '金魚草', description: 'これは金魚草です'},
  {name: '鈴蘭', description: 'これは鈴蘭です'},
  {name: '鳳仙花', description: 'これは鳳仙花です'},
  {name: '桜', description: 'これは桜です'},
  {name: 'チューリップ', description: 'これはチューリップです'},
  {name: '薔薇', description: 'これは薔薇です'},
  {name: 'スイセン', description: 'これはスイセンです'},
  {name: 'ローズマリー', description: 'これはローズマリーです'},
]
const root = document.getElementById('root')
imgs.forEach((img, index) =>{
  img.addEventListener('click', () => {
   
    const overlay = document.createElement('div')

    overlay.classList.add('overlay')

    const modal = document.createElement('div')

    modal.classList.add('modal')

    const image = document.createElement('img')
    
    image.width = 300
    image.height = 200
    image.src = img.src

    const title = document.createElement('h3')

    title.textContent = contents[index].name

    const back = document.createElement('button')
    
    back.textContent = '削除'

    back.addEventListener('click', () => {
      overlay.remove()
    })

    const description = document.createElement('p')

    description.textContent = contents[index].description
    
    modal.appendChild(image)
    modal.appendChild(title)
    modal.appendChild(description)
    modal.appendChild(back)
    overlay.appendChild(modal)
    root.appendChild(overlay)
  })})

  const imgM1 = document.getElementById('img-m1')
  // console.log(imgM1)
  const imgM2 = document.getElementById('img-m2')
  // console.log(imgM2)
  const imgAll = document.querySelectorAll('.img')
  // console.log(imgAll)
  const newImgAll = [imgM1, imgM2, ...imgAll]

  newImgAll.forEach(img=>{
    img.style.transition = '.3s'
    img.classList.add('before')
  })
  const callback = (entries, observer) => {
    entries.forEach(entry=> {
      if(entry.isIntersecting){
        entry.target.classList.remove('before')
        observer.unobserve(entry.target)
      }
    })
  }
  const options = {
    threshold: .8
  }

  const  observer = new IntersectionObserver(callback, options)

  newImgAll.forEach(newImg=>{
    observer.observe(newImg)
  })

  
  

const imgs = document.querySelectorAll('.img')
const contents = [
  {name: 'シクラメン', description: 'これはシクラメンです'},
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

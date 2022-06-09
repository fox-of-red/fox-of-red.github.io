import { useState } from "react"

export const Input = () => {
    const [inputText, setInputText] = useState('')
    const onChangeInput = (e) => {
      setInputText(e.target.value)
      console.log(e.target.value)

    }
  return (
    <>
    <p>inputをstate管理できます</p>
    <div style={{width: '200px', margin: 'auto auto', background: 'yellow', textAlign: 'center', padding: '25px', borderRadius: '20px', fontSize: '32px'}}>
      <input type="text" onChange={(e) => {
        onChangeInput(e)
      }} value={inputText}/>
    </div>
    </>
  )
    }
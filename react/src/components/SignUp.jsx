import { useState } from "react"

export const SignUp = () => {
  const [idInput, setIdInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [isEmpty, setIsEmpty] = useState(false)
  const onSubmitForm = (e) => {
    e.preventDefault()
    if(idInput==='' || passwordInput===''){
      setIsEmpty(true)
    }else{
      return
    }
  }
  const onChangeIdInput = (e) => {
    setIdInput(e.target.value)
  }  
  const onChangePasswordInput = (e) => {
    setPasswordInput(e.target.value)
  } 
  let errorText
  if(isEmpty){
    errorText = (<p style={{color: 'red'}}>ID or Password is Empty</p>)
  }else{
    errorText = null
  }
  return(
    <>
    <p>空で送信した時に赤文字で指摘してくれます</p>
    <div style={{width: '200px', margin: 'auto auto', background: 'white', textAlign: 'center', padding: '25px', borderRadius: '20px', border: '1px solid black'}}>
      <p>空で送信してください</p>
      <div id='error'>
        {errorText}
      </div>
      <form onSubmit={onSubmitForm}>
        <input type="text" placeholder='idを入力'value={idInput} onChange={onChangeIdInput}/>
        <input type="password" placeholder='パスワードを入力' value={passwordInput} onChange={onChangePasswordInput}/>
        <input type="submit" />
      </form>
    </div>
    </>
  )
}
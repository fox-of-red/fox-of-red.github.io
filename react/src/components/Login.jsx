import { useState } from "react"
import { User } from "./User"
export const Login = () => {
  let errorText
  const [userCompo, setUserCompo] = useState()
  const DUMMY_USERS = [
    {id: 'sample_id_1', password: '11111111', username: 'guest'},
    {id: 'sample_id_2', password: '22222222', username: 'guest2'},
    {id: 'sample_id_3', password: '33333333', username: 'guest3'},
    {id: 'tomato', password: '33333333', username: '空白'},
  ]
  const [idInput, setIdInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [showUser, setShowUser] = useState(false)
  // const [isEmpty, setIsEmpty] = useState(false)
  const [isError, setIsError] = useState(false)
  const onSubmitForm = (e) => {
    e.preventDefault()
    DUMMY_USERS.forEach(userInfo=>{
      if(idInput === '' || passwordInput === ''){
        errorText = (<p>空です</p>)
        setIsError(true)
      }else{
      if(idInput === userInfo.id){
        if(passwordInput === userInfo.password) {
          setUserCompo(<User id={userInfo.id} password={userInfo.password} username={userInfo.username}/>)
          setShowUser(true)
          // console.log(showUser)
        }else{
          errorText = (<p>パスワードエラー</p>)
          setIsError(true)
        }
      }else{
        errorText = (<p>IDエラー</p>)
        setIsError(true)
      }}

    })
  }
  const onChangeIdInput = (e) => {
    setIdInput(e.target.value)
  }  
  const onChangePasswordInput = (e) => {
    setPasswordInput(e.target.value)
  } 
  return(
    <>
    <p>'id: sample1, password: 11111111'</p>
    <p>'id: sample2, password: 22222222'</p>
    <p>'id: sample3, password: 33333333'</p>
    <p>でログインできます</p>
    <div style={{width: '200px', margin: 'auto auto', background: 'white', textAlign: 'center', padding: '25px', borderRadius: '20px', border: '1px solid black'}}>
      <div id='error'>
        {isError && errorText}
      </div>
      <form onSubmit={onSubmitForm}>
        <input type="text" placeholder='idを入力'value={idInput} onChange={onChangeIdInput}/>
        <input type="password" placeholder='パスワードを入力' value={passwordInput} onChange={onChangePasswordInput}/>
        <input type="submit" />
      </form>
    </div>
    {showUser && userCompo}
    {console.log(showUser)}
    {console.log(userCompo)}
    </>
  )
}
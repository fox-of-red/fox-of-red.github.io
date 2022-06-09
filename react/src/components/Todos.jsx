import { useState } from "react"

export const Todos = () => {
  const [todos, setTodos] = useState([])
  const [inputTodo, setInputTodo] = useState('')
  const onChangeInput = (e) => {
    setInputTodo(e.target.value)
  }
  const onClickButton = () => {
    setTodos([...todos, inputTodo])
    setInputTodo('')
  }
  const onClickDeleteTodo = (index) => {
    todos.splice(index, 1)
    console.log(todos)
    setTodos([...todos])
  }  
  return(
    <>
    <p>TODOを入力できます</p>
    <div style={{width: '200px', margin: 'auto auto', background: 'green', textAlign: 'center', padding: '25px', borderRadius: '20px'}}>
      <p>todo入力してください</p>
    <div>
        <input type="text" onChange={onChangeInput} value={inputTodo}/>
        <button onClick={onClickButton}>送信</button>
      </div>
      <ul style={{listStyle: 'none'}}>
        {todos.map((todo, index)=>{
          return(
            <li key={index} style={{display: 'flex'}}>
              <p>{todo}</p>
              <button onClick={() => onClickDeleteTodo(index)}>削除</button>
            </li>
          )
        })}
      </ul>
      
    </div>
    </>
  )
}
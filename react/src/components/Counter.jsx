import { useState } from "react"

export const Counter = () => {
  // ボタンを押すとカウントアップ、ダウンします
  const [count, setCount] = useState(0)
  return (
    <>
    <p>ボタンを押すとカウントアップ、ダウンします</p>
    <div style={{width: '100px', margin: 'auto auto', background: 'red', textAlign: 'center', padding: '25px', borderRadius: '20px', fontSize: '32px'}}>
      <div>{count}</div>
      <button onClick = {() => {setCount(count+1)}}>+</button>
      <button onClick = {() => {setCount(count-1)}}>-</button>
    </div>
    </>
  )
}

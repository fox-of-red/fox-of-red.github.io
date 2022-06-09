import { useState } from "react"

export const Show = () => {
  // aとbの表示を交換できます
  const [AIsShow, setAIsShow] = useState(true)
  const [BIsShow, setBIsShow] = useState(false)
  return (
    <>
    <p>AとBを切り替えます</p>
    <div style={{width: '100px', margin: 'auto auto', background: 'blue', textAlign: 'center', padding: '25px', borderRadius: '20px', fontSize: '32px'}}>
    {AIsShow&&<p>A</p>}
    {BIsShow&&<p>B</p>}
    <button onClick={() => {
      setAIsShow(true)
      setBIsShow(false)
    }}>show A</button>
    <button onClick={() => {
      setBIsShow(true)
      setAIsShow(false)
    }}>show B</button>
    </div>
    </>
  )
}
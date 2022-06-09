
import { useRef } from "react"

export const InputRef = () => {
  const onChangeRef = () => {
    console.log(inputRef.current.value)
  }
  const inputRef = useRef()
  return(
    <>
    <div>
      {!inputRef.current.value && inputRef.current.value}
      <input type="text" ref = {inputRef} placeholder='welcome' onChange={onChangeRef}/>
    </div>
    </>
  )
}
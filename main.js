import { useRef, useState } from 'react'
import './Content.css'

function Content() {
  const [count, setCount] = useState(600)
  const timer = useRef(null)
  const [isRight, setIsRight] = useState(true)
  function handleCount() {
    if (isRight) {
      timer.current = setInterval(() => setCount((prev) => prev - 1), 100)
    } else clearInterval(timer.current)
    setIsRight(!isRight)
  }
  function handleInput(e) {
    first.current = true
    setCount(e.target.value * 10)
  }
  const valueInput = useRef()
  const first = useRef(false)
  if (first.current) valueInput.current = Math.floor(count / 10)
  return (
    <div>
      <input
        onChange={handleInput}
        placeholder="Nhập số phút đếm ngược:"
        value={valueInput.current || ''}
      />
      <button onClick={handleCount}>{isRight ? 'Press' : 'Pause'}</button>
      <h1>
        {Math.floor(count / 600 / 10)}
        {Math.floor(count / 600) % 10}m : {Math.floor((count % 600) / 100)}
        {Math.floor(((count % 600) / 10) % 10)}s
      </h1>
    </div>
  )
}

export default Content

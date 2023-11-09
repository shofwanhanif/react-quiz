import { useRef } from 'react'

const Test3 = () => {
  const fieldRef = useRef(null)

  const handleClick = () => {
    fieldRef.current.focus()
  }

  return(
    <div>
      <ul>
        <li>Please focus to the text field when user click the focus button</li>
      </ul>
      <p>
        <button type="button" onClick={handleClick} >Focus Text Field</button>
      </p>
      <input type="text" placeholder="focus me" ref={fieldRef} />
    </div>
  )
}

export default Test3;
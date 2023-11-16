import { useState } from 'react'

const Test1 = () => {
  const [value, setValue] = useState("")

  const handleChangeValue = (e) => {
    setValue(e.target.value)
  }

  return(
    <div>
      <ul>
        <li>Please render the inputted value</li>
      </ul>
      <p>
        <b>User Input: </b> { value }
      </p>
      <input type="text" placeholder="input here" onChange={handleChangeValue} />
    </div>
  )
}

export default Test1;
import Solar from "./Solar";
import { useState } from "react";

const Test9 = () => {
  const [value, setValue] = useState(0)

  const handleChangeValue = (data) => {
    const regex = /^[0-9\b]+$/; 

    if (parseInt(data) > 9)
      return

    if (data === '' || regex.test(data))
      setValue(data)
  }

  return (
    <>
      <ul>
        <li>Make a solar system</li>
        <li>Number of planets must revolves around the sun</li>
        <li>The color of each planet must be unique</li>
        <li>More far the planet = more time it's revolves</li>
      </ul>
      <input type="text" placeholder="number of planet" value={value} onChange={(e) => handleChangeValue(e.target.value)}/>
      <Solar value={value}/>
    </>
  )
}

export default Test9;
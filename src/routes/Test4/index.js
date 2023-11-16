import { useState, useRef } from 'react'
import Input from "./Input";
import Table from "./Table";

const Test4 = () => {
  const inputRef = useRef(null)

  const [keyword, setKeyword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setKeyword(inputRef.current.value)
  }

  return(
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input inputRef={inputRef} onSubmit={handleSubmit} />
      <div>
        <Table keyword={keyword} />
      </div>
    </div>
  )
}

export default Test4;
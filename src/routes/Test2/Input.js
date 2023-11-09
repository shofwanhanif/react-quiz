const Input = (props) => {
  const { value, setValue } = props
  
  return <input type="text" placeholder="input here" value={value} onChange={(e) => setValue(e.target.value)}  />
}

export default Input;

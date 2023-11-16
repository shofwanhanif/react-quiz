
const Input = (props) => {
  const { inputRef, onSubmit } = props

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="search" ref={inputRef} />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;

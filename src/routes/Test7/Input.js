import { useSearch } from './Context'

const Input = () => {
  const { setKeyword, searchInputRef } = useSearch()

  const handleSubmit = (e) => {
    e.preventDefault()
    setKeyword(searchInputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="search" ref={searchInputRef} />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;

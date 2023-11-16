import { css } from 'react-emotion';

const cssLabel = css({
  display: 'inline-block',
  margin: '4px 0px',
  padding: '2px 8px',
  backgroundColor: '#e0e0e0',
  borderRadius: 8,
  button: {
    backgroundColor: 'transparent',
    color: 'red',
    marginLeft: 4,
    fontSize: 22,
    padding: 0,
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    visibility: 'hidden'
  },

  ":hover": {
    button: {
      visibility: 'visible'
    }
  }
})

const Label = (props) => {
  const { value, setValue } = props
  
  return (
    <>
    { value && 
    <span className={cssLabel}>
      {value}
      <button type="button" onClick={() => setValue('')}>⊗</button>
    </span> 
    }  
    </>
  )
}

export default Label;

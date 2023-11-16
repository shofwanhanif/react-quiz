import { cssWrapper } from './style';

const Comp2 = (props) => {
  const { value } = props
  return(
    <>
      <div className={cssWrapper}>Latest inputted value is: {value}</div>
    </>
  )
}

export default Comp2;
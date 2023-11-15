import { cssWrapper, cssModalRight } from './style';

import { useValue } from '.';

const Comp4 = (/* NO PROPS ALLOWED */) => {
  const { value, handleChangeValue } = useValue()
  return(
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button type="button">⊗</button>
        </div>
        <input id="mynumber2" type="text" placeholder="input mynumber2" value={value} onChange={(e) => handleChangeValue(e.target.value)}></input>
      </div>
    </>
  )
}

export default Comp4;
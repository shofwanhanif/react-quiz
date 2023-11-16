import { cssWrapper } from "./style";

import { useState } from "react";
import Comp4 from "./Comp4";

import { useValue } from ".";

const Comp3 = (/* NO PROPS ALLOWED */) => {
  const { value } = useValue()
  const [ showModal, setShowModal ] = useState(false);

  return(
    <>
      <div className={cssWrapper}>The Inputted Value is: {value}</div>
      <button type="button" onClick={() => setShowModal(!showModal)}>Show Modal</button>
      {showModal && <Comp4/>}
    </>
  )
}

export default Comp3;
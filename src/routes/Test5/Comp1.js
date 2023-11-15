import { cssWrapper } from './style';

import { useState } from "react";
import Comp2 from "./Comp2";

const Comp1 = (props) => {
  const { value, setValue } = props
  const [overwrite, setOverwrite] = useState(false);

  return(
    <div className={cssWrapper}>
      Latest Inputted from <code>[Test5/Comp1]*</code>
      <br/>
      <br/>
      <label htmlFor="overwrite">
        Local overwrite: <input id="overwrite" type="checkbox" value={overwrite} onChange={() => setOverwrite(!overwrite)}/>
        { overwrite  && <input id="mynumber1" type="text" placeholder="input mynumber1" value={value} onChange={(e) => setValue(e.target.value)}/> }
      </label>
      <Comp2 value={value} />
    </div>
  )
}

export default Comp1;
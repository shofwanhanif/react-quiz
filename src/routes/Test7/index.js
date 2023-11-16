import useRenderLog from "../../hooks/useRenderLog";
import Input from "./Input";
import Table from "./Table";
import { SearchProvider } from "./Context";

const Test7 = () => {
  useRenderLog('Test7', 1);

  return(
    <SearchProvider>
      <div>
        <ul>
          <li>Please filter the table by name search (after press enter or click search button)</li>
          <li>No rerender allowed in <code>Test7</code> component</li>
        </ul>
        <Input />
        <div>
          <Table />
        </div>
      </div>
    </SearchProvider>
  )
}

export default Test7;
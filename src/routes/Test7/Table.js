import DATA from "./_data";
import { useSearch } from "./Context";

const Table = () => {
  const { keyword } = useSearch()
  const data = keyword ? DATA.filter((item) => item.name.toLowerCase().includes(keyword.toLowerCase())) : DATA
 
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((eachrow, idx) => (
          <tr key={idx}>
            <td>{eachrow.name}</td>
            <td>{eachrow.age}</td>
            <td>{eachrow.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;

import DATA from "./_data";

const Table = (props) => {
  const { keyword } = props
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
        { data?.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.address}</td>
          </tr>
        )) }
      </tbody>
    </table>
  )
}

export default Table;

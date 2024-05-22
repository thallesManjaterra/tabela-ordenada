export const TableRow = ({ row }) => {
  console.log(row)
  return (
    <tr>
      <td>{row.nome}</td>
      <td>{row.idade}</td>
      <td>{row.cargo}</td>
    </tr>
  )
}

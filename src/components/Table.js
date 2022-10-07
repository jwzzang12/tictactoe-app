import Tr from "./Tr";

export default function Table({ onClick, tableData }) {
  return (
    <table onClick={onClick}>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr rowData={tableData[i]} rowIndex={i} />
        ))}
    </table>
  );
}

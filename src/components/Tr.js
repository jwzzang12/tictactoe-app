import Td from "./Td";

export default function Tr({ rowData, rowIndex }) {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td rowIndex={rowIndex} cellIndex={i} />
        ))}
    </tr>
  );
}

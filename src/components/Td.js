import { useCallback } from "react";
export default function Td({ rowIndex, cellIndex }) {
  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
  });

  return <td onClick={onClickTd}></td>;
}

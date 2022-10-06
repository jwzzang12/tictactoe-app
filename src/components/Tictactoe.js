import Table from "./Table";
import { useCallback, useReducer, useState } from "react";

export default function Tictactoe() {
  const initState = {
    winner: "",
    turn: "O",
    tableData: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
  };

  const reducer = (state, action) => {};

  const [state, dispatch] = useReducer(reducer, initState);
  // const [winner, setWinner] = useState("");
  // const [turn, setTurn] = useState("O");
  // const [tableData, setTableData] = useState([
  // ["", "", ""],
  // ["", "", ""],
  // ["", "", ""],
  // ]);
  const onClickTable = useCallback(() => {
    dispatch({ type: "SET_WINNER", winner: "O" });
  }, []);
  return (
    <>
      <Table onClick={onClickTable} />
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  );
}

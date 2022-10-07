import Table from "./Table";
import { useCallback, useReducer } from "react";
const initState = {
  winner: "",
  turn: "O",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};
export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
//변수로 빼는게 좋음

//reducer : action을 해석해서 state를 바꿔주는 것
const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      //state.winner=action.winner; 로 바꾸면 안됨
      //기존 state 얕은 복사 -> ...state
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL:
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
      };
  }
};

export default function Tictactoe() {
  const [state, dispatch] = useReducer(reducer, initState);
  // const [winner, setWinner] = useState("");
  // const [turn, setTurn] = useState("O");
  // const [tableData, setTableData] = useState([
  // ["", "", ""],
  // ["", "", ""],
  // ["", "", ""],
  // ]);
  const onClickTable = useCallback(() => {
    dispatch({ type: SET_WINNER, winner: "O" });
  }, []);
  return (
    <>
      <Table onClick={onClickTable} tableData={state.tableData} />
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  );
}

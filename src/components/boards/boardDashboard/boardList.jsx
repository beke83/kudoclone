import React from "react";
import BoardListItem from "./boardListItem";

export default function BoardList({ boards, deleteBoard }) {
  return (
    <>
      {boards.map((board) => (
        <BoardListItem board={board} key={board.id} 
        deleteBoard={deleteBoard} />
      ))}
    </>
  );
}

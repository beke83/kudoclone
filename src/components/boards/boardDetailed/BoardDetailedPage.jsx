import React from "react";
import { useSelector } from "react-redux";
import BoardDetailedBody from "./BoardDetailedBody";
import BoardDetailedHeader from "./BoardDetailedHeader";

export default function BoardDetailedPage({match}) {
  //use selector to selcet the particular event we intrested from the store
  const board = useSelector(state => state.board.boards.find(b => b.id === match.params.id));

  return (
    <>
      <div className="row">
        <BoardDetailedHeader board={board} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row"> 
      <BoardDetailedBody board={board} />
      </div>
     
      
    </>
  );
}

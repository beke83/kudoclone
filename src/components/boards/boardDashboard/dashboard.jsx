import React, { useState } from "react";
import BoardList from "./boardList";
import NewBoardForm from "../boardForm/NewBoardForm";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const {boards} = useSelector((state) => state.board);

  //using useState to contro the components state
  //const [boards, setBoards] = useState(sampleData);
  //const [selectedBoard, setSelectedBoard] = useState(null);
  const [formOpen, setFormOpen] = useState(true);

  // function handleCreateBoard(board) {
  //   setBoards([...boards, board])
  // }

  // function handleSelectBoard(board){
  //   setSelectedBoard(board);

  // }

  function handleDeleteBoard(boardId) {
    //setBoards(boards.filter(board => board.id !== boardId))
  }

  return (
    <>
      <div className='page-header pt-1'>
        <div className='row'>
          <div className='col-sm-12 float-right'>
            <h2 className='heading'>Dashboard</h2>
            <a
              href=''
              className='btn btn-primary float-right mt-0'
              data-toggle='modal'
              data-target='#bd-example-modal-lg'
              type='button'
            >
              <i className='icon-copy ion-plus-round'></i> New Board
            </a>
          </div>
          <div className='col-md-4 col-sm-10'>
            <div className='title'></div>
            <nav aria-label='breadcrumb' role='navigation'>
              <div className='links mb-0'>
                <a href='#?' className='link selected'>
                  Given
                </a>
                <a href='#?' className='link'>
                  Received
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/*pass the sample data as props to the child component BoardList*/}
      <BoardList boards={boards} deleteBoard={handleDeleteBoard} />

      <div
        className='modal fade bs-example-modal-lg'
        id='bd-example-modal-lg'
        tabindex='-1'
        role='dialog'
        aria-labelledby='myLargeModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <div
                className='modal-title'
                style={{ textAlign: "center" }}
                id='myLargeModalLabel'
              >
                Create New Board
              </div>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-hidden='true'
              >
                ×
              </button>
            </div>
            <div className='modal-body'>
              {formOpen && (
                <NewBoardForm
                  //setBoards={setBoards}
                  // createBoard={handleCreateBoard}
                  setFormOpen={setFormOpen}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

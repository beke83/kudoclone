import React from 'react'
import BoardListItem from './boardListItem'

export default function BoardList({boards}){
    return(
        <>
        {boards.map(board => (
            <BoardListItem board={board} key={board.id} />
        ))}
        </>
    );
}
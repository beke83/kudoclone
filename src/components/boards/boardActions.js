import { CREATE_BOARD, UPDATE_BOARD, DELETE_BOARD } from "./boardsConstants";

export function createBoard(board){
    return{
        type: CREATE_BOARD,
        payload: board
    }
}

export function updatereateBoard(board){
    return{
        type: UPDATE_BOARD,
        payload: board
    }
}

export function deleteBoard(boardId){
    return{
        type: DELETE_BOARD,
        payload: boardId
    }
}
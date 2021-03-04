import { sampleData } from "../api/sampleData";
import { CREATE_BOARD, DELETE_BOARD, UPDATE_BOARD } from "./boardsConstants";

const initialState = {
  boards: sampleData,
};

export default function boardReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_BOARD:
      return {
        ...state,
        boards: [...state.boards, payload], //this creats a new array and populates the new state.
      };

    case UPDATE_BOARD:
      return {
        ...state,
        boards: [
          ...state.boards.filter((bod) => bod.id !== payload.id),
          payload,
        ],
      };

    case DELETE_BOARD:
      return {
        ...state,
        boards: [...state.boards.filter((bod) => bod.id !== payload)],
      };

    default:
      return state;
  }
}

import { combineReducers } from 'redux';
import boardReducer from '../components/boards/boardReducer';

const rootReducer = combineReducers({
    board: boardReducer,
})

export default rootReducer;
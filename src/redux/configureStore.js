import  {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import rootReducer from './rootReducer';

export function configureStore(){
    return createStore(rootReducer, devToolsEnhancer());
}

/* to configure the store you use the createStore mehod from redux and return the function with testReducer as parameter */
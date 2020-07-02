import {combineReducers} from 'redux'
import wordArrReducer from './wordArrReducer'
import isAddingReducer from './isAddingReducer'
import statusReducer from './statusReducer';

const reducer = combineReducers({
    wordArr: wordArrReducer ,
    status: statusReducer,
    isAdding: isAddingReducer
  })

export default reducer;
  
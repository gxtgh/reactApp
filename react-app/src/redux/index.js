import { combineReducers} from 'redux'
const initState = {
    addList: [1,2,3,4]
}

function addSum(state = initState, action) {
    return {
        ...state
    }
}

export default combineReducers({
    addSum
})
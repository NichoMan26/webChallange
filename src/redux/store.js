import { createStore, combineReducers } from '../../node_modules/redux'
import appReducer from './appReducer.js'

let reducers = combineReducers({
    app: appReducer,
})
let store = createStore(reducers)

window.store = store
export default store
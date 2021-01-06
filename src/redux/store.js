import { createStore, combineReducers } from '../../node_modules/redux'
import appReducer from './appReducer.js'
import jobsReducer from './jobsReducer.js'

let reducers = combineReducers({
    app: appReducer,
    jobs: jobsReducer,
})
let store = createStore(reducers)

window.store = store
export default store
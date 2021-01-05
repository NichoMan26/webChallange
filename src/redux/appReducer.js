const SET_APP_STATE = 'SET_APP_STATE'

///////********************/////////////
let initState = {
    name:"",
    appState:'MAIN'
}
const appReducer = (state = initState, action) => {
    switch(action.type){

        case SET_APP_STATE:// init state
            return {...state, appState:action.appState?action.appState:'init'}
        default:
            return state
    }
}
export const setAppState = (appState) => ({type:SET_APP_STATE, appState})
export default appReducer
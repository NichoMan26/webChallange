const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_PASS = 'UPDATE_PASS'
const SET_NAME = 'SET_NAME'

///////********************/////////////
let initState = {
    enterName:'',
    enterPass:'',
    name:"user", 
    appState:'MAIN'
}
const appReducer = (state = initState, action) => {
    switch(action.type){

        case UPDATE_NAME:// change name
            return {...state, enterName:action.newName}

        case UPDATE_PASS:// change pass
            return {...state, enterPass:action.newPass}

        case SET_NAME: //set name
        console.log('state: ', state);
        if(state.enterPass.toLowerCase() === 'user' && state.enterName.toLowerCase() === 'user'){ // checking pass
            return {...state,  name:state.enterName}
        }
        default:
            return state
    }
}
export const updateName = (newName) => ({type:UPDATE_NAME, newName})
export const updatePass = (newPass) => ({type:UPDATE_PASS, newPass})
export const setName = () => ({type:SET_NAME})
export default appReducer
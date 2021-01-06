const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_PASS = 'UPDATE_PASS'
const SET_NAME = 'SET_NAME'
const SET_SAVE_ME = 'SET_SAVE_ME'

///////********************/////////////
let nameLS 
localStorage.WCName ? nameLS = localStorage.WCName : nameLS = ''
let initState = {
        enterName:nameLS,
        enterPass:nameLS,
        name:nameLS, 
        saveMe: false,
        appState:'MAIN'
   }

const appReducer = (state = initState, action) => {
    switch(action.type){

        case UPDATE_NAME:// change name
            return {...state, enterName:action.newName}

        case UPDATE_PASS:// change pass
            return {...state, enterPass:action.newPass}

        case SET_SAVE_ME:// change value Save me
        console.log(action.saveMe);
            return {...state, saveMe:action.saveMe}

        case SET_NAME: //set name
        if(state.saveMe){
            localStorage.setItem('WCName', state.enterName)
        }
        if(state.enterPass.toLowerCase() === 'user' && state.enterName.toLowerCase() === 'user'){ // checking pass
            return {...state,  name:state.enterName}
        }
        default:
            return state
    }
}
export const updateName = (newName) => ({type:UPDATE_NAME, newName})
export const updatePass = (newPass) => ({type:UPDATE_PASS, newPass})
export const setSaveMe = (saveMe) => ({type:SET_SAVE_ME, saveMe})
export const setName = () => ({type:SET_NAME})
export default appReducer
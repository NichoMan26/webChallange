import {connect} from 'react-redux'
import Body from './Body'
import { setName, updateName, updatePass} from '../../../redux/appReducer'
import { updateNewMessage, addNewMessage} from '../../../redux/jobsReducer'

let mapStateToProps = (state) => {
    return{
        app:state.app,
        jobs:state.jobs
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setName:() => {
            dispatch(setName());
        },
        updateName:(newName) => {
            dispatch(updateName(newName));
        },
        updatePass:(newPass) => {
            dispatch(updatePass(newPass));
        },
        updateNewMessage:(newMessage) => {
            dispatch(updateNewMessage(newMessage));
        },
        addNewMessage:(id) => {
            dispatch(addNewMessage(id));
        },
        
    }
}
export default connect(mapStateToProps,  mapDispatchToProps)(Body)
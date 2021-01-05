import {connect} from 'react-redux'
import Body from './Body'
import { setAppState} from '../../../redux/appReducer'

let mapStateToProps = (state) => {
    return{
        app:state.app
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setAppState:(appState) => {
            dispatch(setAppState(appState));
        },
        
    }
}
export default connect(mapStateToProps,  mapDispatchToProps)(Body)
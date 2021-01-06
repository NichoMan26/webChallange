import cls from './Body.module.css'
import {Route, withRouter, Switch, Redirect} from 'react-router-dom'

import Auth from '../BodyContainer/Auth/Auth.jsx'
import Main from '../BodyContainer/Main/Main.jsx'
import SingleJob from './SingleJob/SingleJob'
const Body = (props) => {
    console.log('props: ', props);
    return(
        <Switch>
            <Route exact path='/auth' render={() => {
                <Auth app={props.app} 
                      setName={props.setName}
                      updateName={props.updateName}
                      updatePass={props.updatePass}
                      />}}/>
            <Route exact path='/' render={() => {
                if(props.app.name.toLowerCase() !== 'user'){ //if not auth redirect on authPage
                    return <Auth app={props.app} 
                                 setName={props.setName}
                                 updateName={props.updateName}
                                 updatePass={props.updatePass}
                                 setSaveMe={props.setSaveMe}
                                 />
                }
                return <Main jobs={props.jobs.jobs}/>}
            }/>
            <Route path='/job/:id' render={() => {
                if(props.app.name.toLowerCase() !== 'user'){ //if not auth redirect on authPage
                    return <Auth app={props.app} 
                                 setName={props.setName}
                                 updateName={props.updateName}
                                 updatePass={props.updatePass}
                                 setSaveMe={props.setSaveMe}
                                 />
                }
                return <SingleJob updateNewMessage={props.updateNewMessage}  
                                  addNewMessage={props.addNewMessage}
                                  jobs={props.jobs} 
                           />
            }}/>
            <Route exact path='*' render={() => 404}/>

        </Switch>)
                
            
      
}
export default Body
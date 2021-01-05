import cls from './Body.module.css'
import Auth from '../BodyContainer/Auth/Auth.jsx'
import Main from '../BodyContainer/Main/Main.jsx'
const Body = (props) => {
    console.log('props: ', props);
                //this switch let for us rending page relevant appState 
                switch (props.app.appState){
                    case 'AUTH' : return <Auth/> 
                    case 'MAIN' : return <Main/>

                    default : return '404'
                }
            {}
      
}
export default Body
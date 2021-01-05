import cls from './App.module.css'
import { Provider } from 'react-redux'
import store from '../../redux/store.js'

import HeaderContainer from './HeaderContainer/HeaderContainer.jsx'
import BodyContainer from './BodyContainer/BodyContainer.js'
function App() {
  return (
    <Provider store={store}>
      <div className={cls.wrapper}>
        <HeaderContainer/>
        <BodyContainer/>
        
      </div>
    </Provider> 
  );
}

export default App;

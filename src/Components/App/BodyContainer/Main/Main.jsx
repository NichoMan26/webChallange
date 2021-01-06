import cls from './Main.module.css'

import Tabs from './Tabs/Tabs.jsx'
const Main = (props) => {
    return (
        <div className={cls.wrapper}>
            <Tabs jobs={props.jobs}/>
        </div>
    )
      
}
export default Main
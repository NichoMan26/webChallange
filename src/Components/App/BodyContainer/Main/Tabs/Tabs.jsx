import cls from './Tabs.module.css'

import TabButtons from "./TabButtons/TabButtons.jsx"
import TabBody from "./TabBody//TabBody.jsx"
import TabButtonsBar from './TabButtonsBar/TabButtonsBar'
const Tabs = (props) => {
    return (
        <div className={cls.wrapper}>
            <TabButtons/>
            <TabBody jobs={props.jobs}/>
            <TabButtonsBar/>
            
        </div>
    )
      
}
export default Tabs
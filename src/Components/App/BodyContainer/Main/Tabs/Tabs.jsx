import cls from './Tabs.module.css'

import TabButtons from "./TabButtons/TabButtons.jsx"
import TabBody from "./TabBody//TabBody.jsx"
const Tabs = (props) => {
    return (
        <div className={cls.wrapper}>
            <TabButtons/>
            <TabBody/>
            
        </div>
    )
      
}
export default Tabs
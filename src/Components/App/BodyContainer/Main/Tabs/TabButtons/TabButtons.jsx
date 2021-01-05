import cls from './TabButtons.module.css'
import { useState } from 'react';

import ButtonTab from './ButtonTab/ButtonTab.jsx'
const TabButtons = (props) => {
    //Create LocalState for checking is tab active
    const [tabActive, setTabActive] = useState('Jobs');

    return (
        <div className={cls.wrapper}>
            <ButtonTab  tabActive={tabActive} 
                        text='Jobs'
                        setTabActive={setTabActive}/>
                        
            <ButtonTab  tabActive={tabActive} 
                        text='Users'
                        setTabActive={setTabActive}/>
            <ButtonTab  tabActive={tabActive} 
                        text='Customers'
                        setTabActive={setTabActive}/>
        </div>
    )
      
}
export default TabButtons
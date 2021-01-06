import Button from '../../../../../Common/Button/Button'
import cls from './TabButtonsBar.module.css'


const TabButtonsBar = (props) => {
    return (
        <div className={cls.wrapper}>
            <Button text='Create new' click={() =>{console.log('click')}}/>
        </div>
    )
      
}
export default TabButtonsBar
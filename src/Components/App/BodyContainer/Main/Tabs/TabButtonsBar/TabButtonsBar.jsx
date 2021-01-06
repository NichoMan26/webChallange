import Button from '../../../../../Common/Button/Button'
import cls from './TabButtonsBar.module.css'


const TabButtonsBar = (props) => {

    const addNewWork = (e) => {
        alert('In developing..')
    }
    return (
        <div className={cls.wrapper}>
            <Button text='Create new' click={addNewWork}/>
        </div>
    )
      
}
export default TabButtonsBar
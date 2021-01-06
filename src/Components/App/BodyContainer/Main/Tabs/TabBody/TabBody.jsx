import cls from './TabBody.module.css'
import Table from './Table/Table'

const TabBody = (props) => {
    return (
        <div className={cls.wrapper}>
           <Table jobs={props.jobs}/>
        </div>
    )
      
}
export default TabBody
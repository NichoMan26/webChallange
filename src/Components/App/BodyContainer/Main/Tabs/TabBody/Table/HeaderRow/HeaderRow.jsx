import cls from './HeaderRow.module.css'


const HeaderRow = (props) => {
    return (
        <div className={cls.wrapper}>
            <div className="">JOB NAME</div>
            <div className="">JOB ID</div>
            <div className="">CUSTOMER</div>
            <div className="">LOCATION</div>
            <div className="">DATE START</div>
            <div className="">DATE END</div>
            <div className="">STATUS</div>
            
        </div>
    )
      
}
export default HeaderRow
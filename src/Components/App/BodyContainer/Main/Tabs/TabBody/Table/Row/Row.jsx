import toDate from '../../../../../../../../utils/functions/toDate'
import cls from './Row.module.css'


const Row = ({job}) => {
      
    const OpenWindow = () => {
        window.open(`https://web-challange/job/${job.id}`,'','')
    }
    return (
        <div className={job.id % 2 === 0 ? cls.row : cls.row2}>
            <div onClick={OpenWindow} className={cls.sell}>{job.Jname}</div>
            <div className={cls.sell}>{job.id}</div>
            <div className={cls.sell}>{job.customer}</div>
            <div className={cls.sell}>{job.location}</div>
            <div className={cls.sell}>{toDate(job.dateS)}</div>
            <div className={cls.sell}>{toDate(job.dateE)}</div>
            <div className={cls.sell}>{job.status}</div>
            
        </div>
    )
      
}
export default Row
import { useParams } from 'react-router-dom'
import Chat from './Chat/Chat'
import JobInfo from './JobInfo/JobInfo'
import cls from './SingleJob.module.css'

const SingleJob = (props) => {
    
    const ID = +useParams().id
    let JOB = {}
    props.jobs.jobs.map((obj) =>{
        if (obj.id === ID){
            JOB = {...obj} 
        }
    })
    return (
        <div className={cls.wrapper}>
           <h1>{JOB.Jname}</h1>
           <div className={cls.bodyWrapper}>
               <Chat job={JOB} 
               newMessage={props.jobs.newMessage}
               updateNewMessage={props.updateNewMessage}
               addNewMessage={props.addNewMessage} />
               <JobInfo job={JOB}/>
           </div>
        </div>
    )
      
}
export default SingleJob
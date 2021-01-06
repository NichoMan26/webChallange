import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Chat from './Chat/Chat'
import JobInfo from './JobInfo/JobInfo'
import Photos from './Photos/Photos'
import cls from './SingleJob.module.css'

const SingleJob = (props) => {
    const [photosActive, setPhotosActive] = useState(false);

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
               <JobInfo job={JOB}
                        setPhotosActive={setPhotosActive}/>
               {photosActive ? <Photos setPhotosActive={setPhotosActive}/> : null}
               
           </div>
        </div>
    )
      
}
export default SingleJob
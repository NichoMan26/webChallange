import Button from '../../../../Common/Button/Button'
import cls from './JobInfo.module.css'

const JobInfo = (props) => {


    return (
        <div className={cls.wrapper}>
           <div className={cls.textwrapper}>
                <p className={cls.text}>ID: </p>
                <p className={cls.textData}>{props.job.id}</p>
            </div>
            <div className={cls.textwrapper}>
                <p className={cls.text}>Status: </p>
                <p className={cls.textData}>{props.job.status}</p>
            </div>
            <div className={cls.textwrapper}>
                <p className={cls.text}>info: </p>
                <p className={cls.textData}>{props.job.info}</p>
            </div>
            <div className={cls.photosWrapper}>
                <Button text='Photos'/>
            </div>
        </div>
    )
      
}
export default JobInfo
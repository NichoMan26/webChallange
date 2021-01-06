import cls from './Cross.module.css'
const Cross = (props) => {

    return (
        <div onClick={() => {props.setPhotosActive(false)}} className={cls.wrapper}>
          <div className={cls.line}></div>
          <div className={cls.line2}></div>
        </div>
    )
      
}
export default Cross
import cls from './Button.module.css'


const Button = (props) => {
    return (
        <div onClick={() => {props.click()}} className={cls.wrapper}>
            {props.text}
        </div>
    )
      
}
export default Button
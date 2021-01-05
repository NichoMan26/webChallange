import cls from './ButtonTab.module.css'
const ButtonTab = (props) => {
    return (
        <div onClick={() => {props.setTabActive(props.text)}} 
            //if button active add cls.btnActive else cls.btn
             className={props.tabActive === props.text ? cls.btnActive : cls.btn}>
           { props.text}
        </div>
    )
      
}
export default ButtonTab
import cls from './Auth.module.css'
const Auth = (props) => {

  const changeName = (e) => {
    props.updateName(e.currentTarget.value)
  }
  const changePass = (e) => {
    props.updatePass(e.currentTarget.value)
  }
  const setName = (e) => {
    e.preventDefault()
    props.setName()
  }
  const setSaveMe = (e) => {
    props.setSaveMe(e.currentTarget.checked)
  }
  
  return (
    <div className={cls.wrapper}>
      <form >
        <div className={cls.inputWrapper}>
          <label className={cls.label} htmlFor="name">Username</label>
          <input onChange={changeName}
                 className={cls.input} 
                 id='name' 
                 type="text" />
        </div>
        <div className={cls.inputWrapper}>
          <label className={cls.label} htmlFor="pass">Password</label>
          <input onChange={changePass}
                 className={cls.input} 
                 id='pass' 
                 type="password" />
        </div>
        <div className={cls.inputWrapperCheckbox }>
          <label htmlFor="remember">
            remember me
          </label>
          <input id='remember' onChange={setSaveMe} type="checkbox" />
        </div>
        <div className={cls.inputWrapper}>
          <button onClick={setName} 
                  className={cls.btn}>Log In</button>
        </div>
      </form>
    </div>
  );
}
export default Auth
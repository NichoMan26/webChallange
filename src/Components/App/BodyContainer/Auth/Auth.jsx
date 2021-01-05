import cls from './Auth.module.css'
const Auth = () => {
  return (
    <div className={cls.wrapper}>
      <form >
        <div className={cls.inputWrapper}>
          <label className={cls.label} htmlFor="name">Username</label>
          <input className={cls.input} id='name' type="text" />
        </div>
        <div className={cls.inputWrapper}>
          <label className={cls.label} htmlFor="pass">Password</label>
          <input className={cls.input} id='pass' type="password" />
        </div>
        <div className={cls.inputWrapperCheckbox }>
          <label htmlFor="remember">
            remember me
          </label>
          <input id='remember' type="checkbox" />
        </div>
        <div className={cls.inputWrapper}>
          <button className={cls.btn}>Log In</button>
        </div>
      </form>
    </div>
  );
}
export default Auth
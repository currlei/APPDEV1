import leftImg from '../assets/background.svg'
import google from '../assets/google-logo.svg'
import facebook from '../assets/facebook-logo.svg'
import styles from './LoginForm.module.css'

function Login() {
  return (
    <section className={styles.container} aria-labelledby="welcome-heading">
      <img src={leftImg} className={styles.leftImg} alt="" />
      <div className={styles.right}>
        <h1 id="welcome-heading">Hello, <span className={styles.guys}>Guyss!</span></h1>
        
        <div className={styles.form}>
          <span className={styles.lsButtons}>
            <span className={styles.login}>Login</span>
            <span className={styles.signup}>SignUp</span>
          </span>
          <input
            className={styles.email}
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
          />
          <input
            className={styles.password}
            type="password"
            placeholder="Enter Password"
            aria-label="Password"
          />
          <button type="button">Login</button>
          <span className={styles.orText}>Or</span>
          <span className={styles.logos}>
            <img src={google} className={styles.logo} alt="Google" />
            <img src={facebook} className={styles.logo} alt="Facebook" />
          </span>
        </div>
      </div>
    </section>
  )
}

export default Login

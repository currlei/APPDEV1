import styles from "./Signup.module.css";
import logo from "../../assets/logo.svg";

export default function Signup() {
  return (
    <main className={styles.login}>
      <section className={styles.left}>
        <h1 className={styles.tagline}>
          Need webdesign
          <br />
          for your business?
          <br />
          <strong>Design Spacee</strong>
          <br />
          will help you.
        </h1>

        <img className={styles.logo} src={logo} alt="Design Spacee logo" />
        <p className={styles.link}>figma.com/@designspacee</p>
      </section>

      <section className={styles.right} aria-labelledby="signup-heading">
        <form
          className={styles.form}
          onSubmit={(event) => event.preventDefault()}
        >
          <h2 id="signup-heading">Create Account</h2>

          <div className={styles.socialButtons}>
            <button className={styles.socialButton} type="button">
              Sign up with Google
            </button>
            <button className={styles.socialButton} type="button">
              Sign up with Facebook
            </button>
          </div>

          <div className={styles.divider}>
            <span>OR</span>
          </div>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            aria-label="Full Name"
            autoComplete="name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            autoComplete="email"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
            autoComplete="new-password"
            required
          />

          <button className={styles.submitButton} type="submit">
            Create Account
          </button>

          <p className={styles.signup}>
            Already have an account? <a href="#login">Login</a>
          </p>
        </form>
      </section>
    </main>
  );
}

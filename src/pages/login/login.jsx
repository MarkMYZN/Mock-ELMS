import styles from "./login.module.css";

export default function Login() {
	return (
		<>
			<title>Login - ELMS</title>
			<section className={styles.wrapper}>
				<section className={styles.company}>
					<h1>Hamburg LTD</h1>
				</section>
				<section className={styles.formContainer}>
					<h2>Login</h2>
					<form className={styles.form}>
						<label>Enter Email:</label>
						<input
							type={"email"}
							id={"email"}
							placeholder="Enter Email Address"
							required
						/>
						<label>Enter Password:</label>
						<input
							type={"password"}
							id={"password"}
							placeholder="Enter Password"
							required
						/>
						<button>Submit</button>
					</form>
				</section>
			</section>
		</>
	);
}

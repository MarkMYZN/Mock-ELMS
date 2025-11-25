import styles from "./sidebar.module.css";
import Card from "../card/card.jsx";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
	return (
		<section className={styles.sect1}>
			<section className={styles.company}>
				<img src="https://www.svgrepo.com/show/95429/burger.svg" />
			</section>

			<section className={styles.cardHandle}>
				<Card className={styles.card} />
			</section>

			<section className={styles.btnContainer}>
				<NavLink
					to="/dashboard"
					className={({ isActive }) =>
						isActive ? `${styles.navBtn} ${styles.activeBtn}` : styles.navBtn
					}>
					<img src="https://www.svgrepo.com/show/533502/house-chimney-blank.svg" />
					Dashboard
				</NavLink>

				<NavLink
					to="/courses"
					className={({ isActive }) =>
						isActive ? `${styles.navBtn} ${styles.activeBtn}` : styles.navBtn
					}>
					<img src="https://www.svgrepo.com/show/533422/memo-pencil.svg" />
					Courses
				</NavLink>

				<NavLink
					to="/chat"
					className={({ isActive }) =>
						isActive ? `${styles.navBtn} ${styles.activeBtn}` : styles.navBtn
					}>
					<img src="https://www.svgrepo.com/show/533234/message-circle-chat.svg" />
					Chat
				</NavLink>

				<NavLink
					to="/notifications"
					className={({ isActive }) =>
						isActive ? `${styles.navBtn} ${styles.activeBtn}` : styles.navBtn
					}>
					<img src="https://www.svgrepo.com/show/532089/bell-alt.svg" />
					Notifications
				</NavLink>

				<NavLink
					to="/calendar"
					className={({ isActive }) =>
						isActive ? `${styles.navBtn} ${styles.activeBtn}` : styles.navBtn
					}>
					<img src="https://www.svgrepo.com/show/533381/calendar-alt.svg" />
					Calendar
				</NavLink>

				<NavLink
					to="/people"
					className={({ isActive }) =>
						isActive ? `${styles.navBtn} ${styles.activeBtn}` : styles.navBtn
					}>
					<img src="https://www.svgrepo.com/show/532390/users.svg" />
					People
				</NavLink>
			</section>
		</section>
	);
}

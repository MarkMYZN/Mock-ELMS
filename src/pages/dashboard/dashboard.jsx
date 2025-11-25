import styles from "./dashboard.module.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Card from "../../components/card/card.jsx";
import Table from "../../components/table/table.jsx";

const dueHeaders = ["Name", "Task Name", "Section", "Course ID"];

const dueData = [
	{
		name: "No tasks due at the moment.",
		task: "",
		section: "",
		courseID: "",
	},
];

const chatHeaders = ["Name", "Section", "Role"];

const chatData = [
	{
		name: "No new messages.",
		section: "",
		role: "",
	},
];

export default function Dashboard() {
	return (
		<>
			<title>Dashboard - ELMS</title>

			<section className={styles.mainSect}>
				<section className={styles.sect1}>
					<h1>Hamburg Education System</h1>
				</section>

				<section className={styles.cardContainer}>
					<Card className={styles.card} />
				</section>

				<section className={styles.sect2}>
					<h2>Upcoming Assignments</h2>
				</section>

				<section className={styles.tableContainer}>
					<Table headers={dueHeaders} data={dueData} />
				</section>

				<section className={styles.sect3}>
					<h2>Courses</h2>
				</section>

				<section className={styles.calendarContainer}>
					contents are put here
				</section>

				<section className={styles.sect4}>
					<h2>Messages</h2>
				</section>

				<section className={styles.messagesContainer}>
					<Table headers={chatHeaders} data={chatData} />
				</section>
			</section>
		</>
	);
}

// import { useState } from "react";
import styles from "./courses.module.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Card from "../../components/card/card.jsx";
import Table from "../../components/table/table.jsx";

const headers = ["ID", "Name", "Section", "Schedule", "Course ID"];

const data = [
	{
		id: 1,
		name: "Computer Programming 1",
		section: "BT103",
		schedule: "SY2526-1T",
		courseID: "CITE1003",
	},
	{
		id: 2,
		name: "Euthenics 1",
		section: "BS101",
		schedule: "SY2526-1T",
		courseID: "STICI002",
	},
	{
		id: 3,
		name: "Teacher Evaluation",
		section: "Tertiary Survey SY2526-1T",
		schedule: "SY2025-2026-1T",
		courseID: "STI College Novaliches",
	},
	{
		id: 4,
		name: "PATHFIT 3: Individual–Dual Sports",
		section: "BS301",
		schedule: "SY2526-1T",
		courseID: "PHED1007",
	},
	{
		id: 5,
		name: "Philippine Popular Culture",
		section: "BS301",
		schedule: "SY2526-1T",
		courseID: "GEDC1041",
	},
	{
		id: 6,
		name: "Principles of Communication",
		section: "BT305",
		schedule: "SY2526-1T",
		courseID: "COSC1001",
	},
	{
		id: 7,
		name: "Rizal's Life and Works",
		section: "BS301",
		schedule: "SY2526-1T",
		courseID: "GEDC1014",
	},
	{
		id: 8,
		name: "STI Guidance and Counseling Office",
		section: "STI College Novaliches",
		schedule: "",
		courseID: "GCO",
	},
	{
		id: 9,
		name: "STI Tertiary Student Handbook",
		section: "STI College Novaliches",
		schedule: "",
		courseID: "Student Handbook SDW",
	},
	{
		id: 10,
		name: "Understanding the Self",
		section: "BT103",
		schedule: "SY2526-1T",
		courseID: "GEDC1008",
	},
];

export default function Courses() {
	return (
		<>
			<title>Courses - ELMS</title>
			<section className={styles.mainSect}>
				<section className={styles.sect1}>
					<h2>Course List</h2>
				</section>

				<section className={styles.coursesContainer}>
					<Table headers={headers} data={data} />
				</section>
			</section>
		</>
	);
}

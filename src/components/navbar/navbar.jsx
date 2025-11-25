import React from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<section>
			<nav>
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? styles.btnItemActive : styles.btnItem
					}>
					Home
				</NavLink>

				<NavLink
					to="/about"
					className={({ isActive }) =>
						isActive ? styles.btnItemActive : styles.btnItem
					}>
					About
				</NavLink>

				<NavLink
					to="/skills"
					className={({ isActive }) =>
						isActive ? styles.btnItemActive : styles.btnItem
					}>
					Skills
				</NavLink>

				<NavLink
					to="/tech-picks"
					className={({ isActive }) =>
						isActive ? styles.btnItemActive : styles.btnItem
					}>
					Tech Picks
				</NavLink>

				<NavLink
					to="/contact"
					className={({ isActive }) =>
						isActive ? styles.contactActive : styles.contact
					}>
					Contact Me!
				</NavLink>
			</nav>
		</section>
	);
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./index.css";
// import Login from "./pages/login/login.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import Courses from "./pages/courses/courses.jsx";
import Chat from "./pages/chat/chat.jsx";
import Notifications from "./pages/notifications/notifications.jsx";
import Calendar from "./pages/calendar/calendar.jsx";
import People from "./pages/people/people.jsx";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HashRouter>
			{/* <Login /> */}
			<Sidebar />
			{/* <Dashboard /> */}
			{/* <Courses /> */}
			{/* <Calendar /> */}
			{/* <Notifications /> */}
			{/* <People /> */}

			<Routes>
				{/* <Route path="/" element={<Login />} /> */}
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="/chat" element={<Chat />} />
				<Route path="/notifications" element={<Notifications />} />
				<Route path="/people" element={<People />} />
				<Route path="/calendar" element={<Calendar />} />
			</Routes>
		</HashRouter>
	</StrictMode>
);

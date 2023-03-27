import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	Auth,
	AddTasks,
	PrivacyPolicy,
	PendingTasks,
	FinishedTasks,
	Account
} from "./pages";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Auth />} />
				<Route path="/register" element={<Auth />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="/home/addtasks" element={<AddTasks />} />
				<Route path="/home/pending" element={<PendingTasks />} />
				<Route path="/home/completed" element={<FinishedTasks />} />
				<Route path="/home/account" element={<Account />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

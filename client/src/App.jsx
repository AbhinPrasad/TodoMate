import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "./pages";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Auth />} />
				<Route path="/register" element={<Auth />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

import axios from "axios";

const BASE_URL = "http://localhost:5000/auth";

const API = axios.create({ baseURL: BASE_URL });

export const googleAuth = async (data) => {
	console.log(data);
	const response = await API.post("/google", data);
	console.log(response);
};

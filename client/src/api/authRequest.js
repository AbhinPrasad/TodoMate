import axios from "axios";

const BASE_URL = "http://localhost:5000/auth";

const API = axios.create({ baseURL: BASE_URL });

export const googleAuth = async (data) => {
	const response = await API.post("/google", data);
	console.log(response);
};

export const facebookAuth = async(data)=>{
	const response = await API.post("/facebook",data)
	console.log(response);
}

export const githubAuth = async()=>{}

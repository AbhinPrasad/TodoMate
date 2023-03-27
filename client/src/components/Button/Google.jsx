import React from "react";
import { googleAuth } from "../../api/authRequest";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

const GoogleButton = () => {
	const handleGoogleLogin = (credentialResponse) => {
		//credential => jwt token which includes user data of the the google account
		const decoded = jwtDecode(credentialResponse.credential);
		//API_call
		googleAuth(decoded);
	};

	return (
		<GoogleLogin
			onSuccess={handleGoogleLogin}
			onError={() => {
				console.log("Login Failed");
			}}
			type="icon"
			shape="circle"
		/>
	);
};

export default GoogleButton;

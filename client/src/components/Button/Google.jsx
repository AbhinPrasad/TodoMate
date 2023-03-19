import React from "react";
import { FcGoogle } from "react-icons/fc";
import { LoginSocialGoogle } from "reactjs-social-login";

const handleGoogleLogin = () => {};

const Google = () => {
		return(
			<button className="social_button">
			<FcGoogle style={{ fontSize: "25px" }} />
		</button>
		)
	
};

const GoogleLogin = () => {
	return (
		<LoginSocialGoogle
			client_id={import.meta.env.VITE_GOOGLE_CLIENT_ID}
			onResolve={handleGoogleLogin}
			onReject={handleGoogleLogin}
			render={(renderProps) => {
				console.log("Render button");
				return <Google onClick={renderProps.onClick} />;
			}}
		>
			<Google/>
		</LoginSocialGoogle>
	);
};

export default GoogleLogin;

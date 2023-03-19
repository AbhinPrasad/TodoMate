import React from "react";
import { BsFacebook } from "react-icons/bs";
import { LoginSocialFacebook } from "reactjs-social-login";

const handleFacebookLogin = () => {};

const Facebook = () => {
	return (
		<button className="social_button">
			<BsFacebook style={{ fontSize: "25px", color: "#3b5998" }} />
		</button>
	);
};

const FacebookLogin = () => {
	return (
		<LoginSocialFacebook
			appId={import.meta.env.VITE_FACEBOOK_APP_ID}
			onResolve={handleFacebookLogin}
			onReject={handleFacebookLogin}>
			<Facebook />
		</LoginSocialFacebook>
	);
};

export default FacebookLogin;

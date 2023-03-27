import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { LoginSocialFacebook } from "reactjs-social-login";
import { facebookAuth } from "../../api/authRequest";

const handleFacebookLogin = (credentials) => {
	facebookAuth(credentials);
};

const Facebook = () => {
	return (
		<button className="social_button">
			<RiFacebookFill
				style={{
					fontSize: "22px",
					color: "#3b5998"
				}}
			/>
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

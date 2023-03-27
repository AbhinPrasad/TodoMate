import React from "react";
import { LoginSocialGithub } from "reactjs-social-login";
import GitHubIcon from "@mui/icons-material/GitHub";

const GitHubButton = () => {
	return (
		<button className="social_button">
			<GitHubIcon />
		</button>
	);
};

const Github = () => {
	return (
		<LoginSocialGithub
			client_id={import.meta.env.VITE_GITHUB_CLIENT_ID}
			client_secret={import.meta.env.VITE_GITHUB_CLIENT_SECRET}
			redirect_uri={import.meta.env.VITE_GITHUB_REDIRECT_URI}
			onResolve={(data) => {
				console.log(data);
			}}
			onReject={(err) => {
				console.log(err);
			}}>
			<GitHubButton />
		</LoginSocialGithub>
	);
};

export default Github;

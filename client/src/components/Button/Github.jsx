import React from "react";
// import GithubLogin from "react-github-login";
import GitHubIcon from "@mui/icons-material/GitHub";

const Github = (props) => {
	const handleGithubLogin = () => {
		console.log("success");
	};

	return (
		// <GithubLogin
		// 	className="social_button"
		// 	clientId={import.meta.env.VITE_GITHUB_CLIENT_ID}
		// 	redirectUri={import.meta.env.VITE_GITHUB_REDIRECT_URI}
		// 	onSuccess={handleGithubLogin}
		// 	onFailure={handleGithubLogin}>
		// 	<GitHubIcon />
		// 	{props.children}
		// </GithubLogin>
		<button className="social_button">
			<GitHubIcon/>
		</button>
	);
};

export default Github;

import React from "react";
import GithubLogin from "react-github-login";

const Github = () => {
	const handleGithubLogin = () => {
		console.log("success");
	};
    
	return (
		<div className="App">
			<GithubLogin
				clientId="99f18ee20b7770571094"
				redirectUri="http://127.0.0.1:5173/home"
				onSuccess={handleGithubLogin}
				onFailure={handleGithubLogin}
				buttonText="Signup using GitHub"
			/>
		</div>
	);
};

export default Github;

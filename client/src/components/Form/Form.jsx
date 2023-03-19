import React, { useState } from "react";
import "./Form.css";
import { TextField } from "@mui/material";
import { Button, GitHub, Google, Facebook } from "..";
import { useNavigate, useLocation } from "react-router-dom";

const Form = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const showExtraFields = location.pathname === "/register";

	const handleClick = () => {
		showExtraFields ? navigate("/") : navigate("/register");
	};

	return (
		<div className="auth_container">
			<div className="form_text">
				<h1>{showExtraFields ? "Create an account" : "Welcome back"}</h1>
				<p>
					{showExtraFields
						? "signup to ToDoMate and make life easier"
						: "login and create todo's"}
				</p>
			</div>
			<div className="social">
				<Google />
				<Facebook />
				<GitHub />
			</div>
			<div class="section">
				<div class="divider-left"></div>
				<div class="text">or</div>
				<div class="divider-right"></div>
			</div>
			<div className="form_container">
				<form className="auth_form">
					{showExtraFields && (
						<TextField
							id="standard-basic"
							label="Name"
							variant="standard"
							className="textfield"
						/>
					)}
					<TextField
						id="standard-basic"
						label="Email"
						variant="standard"
						className="textfield"
					/>
					<TextField
						id="standard-basic"
						label="Password"
						variant="standard"
						className="textfield"
					/>
					{showExtraFields && (
						<TextField
							id="standard-basic"
							label="Confirm Password"
							variant="standard"
							className="textfield"
						/>
					)}
					<div className="btn">
						<Button>
							{showExtraFields ? "Create Account" : "Login"}
						</Button>
					</div>
				</form>
				<div className="link">
					<p>
						{showExtraFields
							? "Already have an account"
							: "Dont have an account"}
						{showExtraFields ? (
							<a
								onClick={handleClick}
								style={{ color: "purple", cursor: "pointer" }}>
								{" "}
								Login here
							</a>
						) : (
							<a
								onClick={handleClick}
								style={{ color: "purple", cursor: "pointer" }}>
								{" "}
								Register here
							</a>
						)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Form;

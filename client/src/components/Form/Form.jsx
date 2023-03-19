import React from "react";
import "./Form.css";
import { TextField } from "@mui/material";
import { Button, GitHub, Google, Facebook } from "..";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const showExtraFields = location.pathname === "/register";

	//initial values
	const registerInitialValues = {
		name: "",
		email: "",
		password: "",
		confirm_pass: ""
	};

	const loginInitialValues = {
		email: "",
		password: ""
	};

	//validation schema
	const registerValidationSchema = Yup.object().shape({
		name: Yup.string()
			.matches(/^[a-zA-Z\s]*$/g, "Invalid name format")
			.required("Name is required"),
		email: Yup.string()
			.email("Invalid email address")
			.matches(
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g,
				"Invalid email format"
			)
			.required("Email is required"),
		password: Yup.string()
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/g,
				`Password must contain at least 6 characters, one uppercase letter, one lowercase letter, and one number`
			)
			.required("Password is required"),
		confirm_pass: Yup.string()
			.required("Please confirm your password")
			.oneOf([Yup.ref("password"), null], "Passwords must match")
	});

	const loginValidationSchema = Yup.object().shape({
		email: Yup.string()
			.email("Invalid email address")
			.matches(
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g,
				"Invalid email format"
			)
			.required("Email is required"),
		password: Yup.string()
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
				"Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number"
			)
			.required("Password is required")
	});

	// to set the initialvalues and validationschema in formik based on login/register
	const getInitialValues = (showExtraFields) => {
		if (showExtraFields) {
			return registerInitialValues;
		} else {
			return loginInitialValues;
		}
	};

	const getValidationSchema = (showExtraFields) => {
		console.log(showExtraFields);
		if (showExtraFields) {
			return registerValidationSchema;
		} else {
			return loginValidationSchema;
		}
	};

	const handleClick = () => {
		showExtraFields ? navigate("/") : navigate("/register");
	};

	const formik = useFormik({
		initialValues: getInitialValues(showExtraFields),
		validationSchema: getValidationSchema(showExtraFields),
		onSubmit: (values, { resetForm }) => {
			console.log(values);
		}
	});

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
			<div className="section">
				<div className="divider-left"></div>
				<div className="text">or</div>
				<div className="divider-right"></div>
			</div>
			<div className="form_container">
				<form
					className="auth_form"
					noValidate
					onSubmit={formik.handleSubmit}>
					{showExtraFields && (
						<>
							<TextField
								id="standard-basic"
								label="Name"
								variant="standard"
								className="textfield"
								name="name"
								value={formik.values.name}
								onChange={formik.handleChange}
							/>
							{formik.touched.name && formik.errors.name ? (
								<div className="formik_error">{formik.errors.name}</div>
							) : null}
						</>
					)}
					<TextField
						id="standard-basic"
						label="Email"
						variant="standard"
						className="textfield"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
					{formik.touched.email && formik.errors.email ? (
						<div className="formik_error">{formik.errors.email}</div>
					) : null}
					<TextField
						id="standard-basic"
						label="Password"
						variant="standard"
						className="textfield"
						name="password"
						value={formik.values.password}
						onChange={formik.handleChange}
					/>
					{formik.touched.password && formik.errors.password ? (
						<div className="formik_error">{formik.errors.password}</div>
					) : null}
					{showExtraFields && (
						<>
							<TextField
								id="standard-basic"
								label="Confirm Password"
								variant="standard"
								className="textfield"
								name="confirm_pass"
								value={formik.values.confirm_pass}
								onChange={formik.handleChange}
							/>
							{formik.touched.confirm_pass &&
							formik.errors.confirm_pass ? (
								<div className="formik_error">
									{formik.errors.confirm_pass}
								</div>
							) : null}
						</>
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

import React, { useState } from "react";
import "./Sidebar.css";
import profile from "../../assets/profile.jpg";
import {
	MdAddCircleOutline,
	MdOutlineTaskAlt,
	MdAccountCircle
} from "react-icons/md";
import { RiCloseCircleLine, RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Sidebar() {
	const [selected, setSelected] = useState("item1");
	const navigate = useNavigate();

	return (
		<div className="sidebar_container">
			<div className="sidebar_profile">
				<div className="outer_circle">
					<div className="inner_circle">
						<img src={profile} alt="" />
					</div>
				</div>
				<div className="name">
					<h4>Virat Kohli</h4>
					<button className="cta">
						<span className="hover-underline-animation">
							Edit profile
						</span>
						<svg
							viewBox="0 0 46 16"
							height="10"
							width="30"
							xmlns="http://www.w3.org/2000/svg"
							id="arrow-horizontal">
							<path
								transform="translate(30)"
								d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
								data-name="Path 10"
								id="Path_10"
								style={{ fill: "white" }}></path>
						</svg>
					</button>
				</div>
			</div>
			<div className="sidebar_list">
				<div
					className={
						selected === "item1"
							? "sidebar_item-selected"
							: "sidebar_item"
					}
					onClick={() => {
						setSelected("item1");
						// navigate("/home/addtasks");
					}}>
					<MdAddCircleOutline className="sidebar_icon" />
					<h4>Add Tasks</h4>
				</div>
				<div
					className={
						selected === "item2"
							? "sidebar_item-selected"
							: "sidebar_item"
					}
					onClick={() => {
						setSelected("item2");
						// navigate("/home/pending");
					}}>
					<RiCloseCircleLine className="sidebar_icon" />
					<h4>Pending</h4>
				</div>
				<div
					className={
						selected === "item3"
							? "sidebar_item-selected"
							: "sidebar_item"
					}
					onClick={() => {
						setSelected("item3");
						// navigate("/home/completed");
					}}>
					<MdOutlineTaskAlt className="sidebar_icon" />
					<h4>Completed</h4>
				</div>
				<div
					className={
						selected === "item4"
							? "sidebar_item-selected"
							: "sidebar_item"
					}
					onClick={() => {
						setSelected("item4");
						// navigate("/home/account");
					}}>
					<MdAccountCircle className="sidebar_icon" />
					<h4>Account</h4>
				</div>
				<div
					className={
						selected === "item5"
							? "sidebar_item-selected"
							: "sidebar_item"
					}
					onClick={() => {
						setSelected("item5");
						navigate("/");
					}}>
					<RiLogoutCircleRLine className="sidebar_icon" />
					<h4>Logout</h4>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;

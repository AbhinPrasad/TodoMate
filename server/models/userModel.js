import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		password: {
			type: String
		}
	},
	{ timestamps: true }
);

const userModel = mongoose.model("User", userSchema);
export default userModel;

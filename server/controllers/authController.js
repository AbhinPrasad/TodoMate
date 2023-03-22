import User from "../models/userModel.js";

export const googleOAuth = async (req, res) => {
	console.log(req.body);
	try {
		const user = new User({
			name: req.body.name,
			email: req.body.email
		});
		console.log(user);
		const success = await user.save();
		res.status(201).json({ user });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
};

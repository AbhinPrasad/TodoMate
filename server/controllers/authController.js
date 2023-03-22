import User from "../models/userModel.js";

export const googleOAuth = async (req, res) => {
	try {
		const userExist = await User.findOne({ email: req.body.email });
		if (userExist) {
			res.status(400).json("user exists");
		} else {
			const user = new User({
				name: req.body.name,
				email: req.body.email
			});
			await user.save();
			res.status(201).json({ user });
		}
	} catch (err) {
		res.status(500).json(err);
	}
};

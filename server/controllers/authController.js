import User from "../models/userModel.js";

export const googleOAuth = async (req, res) => {
	// console.log(req.body);
	try {
		const userExist = await User.findOne({ email: req.body.email });
		if (userExist) {
			res.status(400).json("user exists");
		} else {
			const user = new User({
				name: req.body.name,
				email: req.body.email,
				profileImg: req.body.picture,
				provider: "google"
			});
			await user.save();
			res.status(201).json({ user });
		}
	} catch (err) {
		res.status(500).json(err);
	}
};

export const facebookOAuth = async (req, res) => {
	// console.log(req.body);
	try {
		if (!req.body.data) {
			res.status(400).json("data not recieved");
		} else {
			const { name, email } = req.body.data;
			const profileImg = req.body.data.picture.data.url;
			const userExist = await User.findOne({ email: email });
			if (userExist) {
				res.status(400).json("user exists");
			} else {
				const user = new User({
					name: name,
					email: email,
					profileImg: profileImg,
					provider: "facebook"
				});
				await user.save();
				res.status(201).json({ user });
			}
		}
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
};

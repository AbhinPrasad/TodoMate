import mongoose from "mongoose";

const connectDB = async () => {
	const conn = await mongoose.connect("mongodb://localhost:27017/todomate");
	console.log(`MongoDB connected :${conn.connection.host}`.bgCyan);
};

export default connectDB;

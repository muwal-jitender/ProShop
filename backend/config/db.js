import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(
      `Error while connecting: ${error.message}`.red.underline.bold
    );
    // It means it will exit with failure
    process.exit(1);
  }
};
export default connectDB;

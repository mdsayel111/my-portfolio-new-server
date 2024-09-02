import dotenv from "dotenv";

dotenv.config();

// get all environment variable and export those
export const config = {
  port: process.env.PORT,
  secret: process.env.SECRET_KEY,
  dbUrl: process.env.DB_URL,
};

import dotenv from "dotenv";

dotenv.config();

// get all environment variable and export those
export const config = {
  port: process.env.PORT,
  secret: process.env.SECRET_KEY,
  dbUrl: process.env.DB_URL,
  tokenSecret: process.env.SECRET_KEY,
  tokenExpireIn: process.env.EXPIRE_IN,
  cookieExpire: Number(process.env.COOKIE_EXPIRE),
};

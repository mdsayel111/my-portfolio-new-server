import { config } from "../../config";
import AppError from "../../error/app-error";
import User from "./model";
import jwt from "jsonwebtoken";

// login service
export const loginService = async (userData: {
  email: string;
  password: string;
}) => {
  const { email, password } = userData;

  const userDataFromDB = await User.findOne({ email });

  // if user email and password is match
  if (
    userDataFromDB &&
    (email === userDataFromDB.email, password === userDataFromDB.password)
  ) {
    const token = jwt.sign(
      { email, role: userDataFromDB.role },
      config.tokenSecret as string,
      {
        expiresIn: config.tokenExpireIn,
      },
    );

    return token;
  }
};

// get login user info service
export const getLoginUserInfoService = async (token: string) => {
  if (!token) {
    throw new AppError("Unauthorize user!");
  }

  const decoded = jwt.verify(token, config.secret as string);

  const userDataFromDB = await User.findOne({
    email: (decoded as { email: string; password: string }).email,
  });

  return userDataFromDB;
};

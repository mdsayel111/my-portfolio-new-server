import { Response } from "express";
import { TAuthData } from "./interface";
import User from "../auth/model";
import jwt from "jsonwebtoken"

// create getToken service
export const getTokenService = async (AuthData: TAuthData, res: Response) => {
  const { email, password } = AuthData;
  const userDataFromDB = await User.findOne({ email });
  if (
    (userDataFromDB && email === userDataFromDB.email && password === userDataFromDB.password)
  ) {
    const token = jwt.sign(
      { email, role: userDataFromDB.role },
      process.env.SECRET_KEY || "",
      {
        expiresIn: "7d",
      }
    );
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        expires: new Date(Date.now() + 700000000),
      })
      .send({ message: "SingIn successful" });
  } else {
    res.status(401).send({ message: "Unathorize" });
  }

  return;
};

// // create update token service
// export const updateTokenService = async (tokenData: TToken) => {
//   // get token data from DB
//   const data = await Token.findOneAndUpdate({}, tokenData, { new: true });

//   return data;
// };

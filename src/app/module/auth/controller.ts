import catchAsync from "../../../HOF/catch-async";
import { config } from "../../config";
import { sendResponse } from "../../utils/send-response";
import { getLoginUserInfoService, loginService } from "./service";
// import { getLeatestProjectService } from "./service";

// create getLoginUserInfo controller
export const getLoginUserInfo = catchAsync(async (req, res) => {
  const { token } = req.cookies;

  const data = await getLoginUserInfoService(token);

  sendResponse(res, {
    status: 200,
    message: "User info retrive successfully!",
    data,
  });
});

// login controller
export const login = catchAsync(async (req, res) => {
  const userData = req.body;

  const token = await loginService(userData);

  // if login service return token
  if (token) {
    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        expires: new Date(Date.now() + config.cookieExpire),
      })
      .send({ message: "Login successful" });
  }

  // otherwise
  sendResponse(res, { status: 401, message: "Unathorize user!" });
});

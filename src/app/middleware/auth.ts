import catchAsync from "../../HOF/catch-async";
import User from "../module/auth/model";
import { verifyToken } from "../utils/jwt";
import { sendResponse } from "../utils/send-response";

const auth = () => {
  // create auth middleware
  const middleware = catchAsync(async (req, res, next) => {
    const { token } = req.cookies;
    const decoded = verifyToken(token);

    // if decoded then pass to the next middleware
    if (decoded) {
      const { email } = decoded;
      const userInfoFromDB = await User.findOne({ email });
      if (userInfoFromDB?.role === "admin") return next();
    }

    // otherwise send user details
    sendResponse(res, {
      status: 401,
      message: "Unauthorized!",
      data: { email: decoded.email, role: decoded.role },
    });
  });

  return middleware;
};

export default auth;

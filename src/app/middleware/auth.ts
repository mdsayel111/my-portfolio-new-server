import catchAsync from "../../HOF/catch-async";
import User from "../module/auth/model";
import { verifyToken } from "../utils/jwt";

const auth = () => {
  // create auth middleware
  const middleware = catchAsync(async (req, res, next) => {
    const { token } = req.cookies;
    const decoded = verifyToken(token);

    // if decoded then pass to the next middleware
    if (decoded) {
      const { email } = decoded;
      const userInfoFromDB = await User.findOne({ email });
      if (userInfoFromDB?.role === "admin")
        return next();
    }

    // otherwise send user details
    // sendResponse(res, { status: 200, message: "User info retrive successfully!", data: { email: decoded.email, role: decoded.role } })
    // res.send();
  });

  return middleware;
};

export default auth;

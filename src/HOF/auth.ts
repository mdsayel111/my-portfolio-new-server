import { TRole } from "../app/types";
import { verifyToken } from "../app/utils/jwt";
import catchAsync from "./catch-async";

const auth = (role: TRole[]) => {
  // create auth middleware
  const middleware = catchAsync(async (req, res, next) => {
    const { token } = req.cookies;
    const decoded = verifyToken(token);

    // if decoded then pass to the next middleware
    if (decoded) {
      next();
    }

    // otherwise send user details
    // sendResponse(res, { status: 200, message: "User info retrive successfully!", data: { email: decoded.email, role: decoded.role } })
    // res.send();
  });

  return role;

  return middleware;
};

export default auth;

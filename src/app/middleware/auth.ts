import { JwtPayload } from "jsonwebtoken";
import { sendResponse } from "../utils/send-response";
import User from "../module/auth/model";
import catchAsync from "../../HOF/catch-async";
import { verifyToken } from "../utils/jwt";

const auth = () => {
  const middleware = catchAsync(async (req, res, next) => {
    const { token } = req.cookies;
    const decoded = verifyToken(token);

    // Ensure decoded is an object (JwtPayload) and has email and role
    if (
      decoded &&
      typeof decoded === "object" &&
      "email" in decoded &&
      "role" in decoded
    ) {
      const { email } = decoded as JwtPayload & { email: string; role: string };
      const userInfoFromDB = await User.findOne({ email });
      if (userInfoFromDB?.role === "admin") return next();
    }

    sendResponse(res, {
      status: 401,
      message: "Unauthorized!",
      data: {
        email:
          typeof decoded === "object" && "email" in decoded
            ? decoded.email
            : null,
        role:
          typeof decoded === "object" && "role" in decoded
            ? decoded.role
            : null,
      },
    });
  });

  return middleware;
};

export default auth;

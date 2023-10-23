import jwt from "jsonwebtoken";
import "dotenv/config";

import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";
import User from "../models/user.js";

const { JWT_SECRET } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;

  try {
    const { id } = jwt.verify(authorization, JWT_SECRET);

    const user = await User.findById(id);

    if (!user || !user.token || user.token !== authorization) {
      throw HttpError(401, "Not authorized");
    }

    req.user = user;
    next();
  } catch {
    throw HttpError(401, "Not authorized");
  }
};

export default ctrlWrapper(authenticate);

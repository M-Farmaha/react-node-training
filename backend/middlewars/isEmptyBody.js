import HttpError from "../helpers/HttpError.js";

export const isEmptyBody = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    next(HttpError(400, "missing fields"));
  }

  next();
};


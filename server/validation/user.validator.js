import { body, validationResult } from "express-validator";
import logger from "../utils/logger.js";
import ErrorHandler from "../utils/errorHandler.js";

const isValid = () => (req, res, next) => {
  const errorFormatter = ({ location, msg, path }) => {
    return `${location} [${path}]: ${msg}`;
  };
  const error = validationResult(req).formatWith(errorFormatter);
  if (error.isEmpty()) {
    return next();
  }
  logger.error(`Validation Error | ${error.array()}`);
  return next(new ErrorHandler("Field validation error.", 400));
};

class UserValidator {
  constructor(account) {
    this.name = account.name;
    this.email = account.email;
    this.password = account.password;
    this.role = account.role;
    this.avatar = account.avatar;
    this.createdAt = account.createdAt;
    this.modifiedAt = account.modifiedAt;
  }

  static validate() {
    return [
      body("name").exists().trim().isLength({ min: 3, max: 64 }),
      body("email").exists().trim().isEmail().isLength({ max: 255 }),
      body("password").exists().trim().isLength({ min: 6, max: 64 }),
      body("createdAt").optional().isDate(),
      body("modifiedAt").optional().isDate(),
      isValid(),
    ];
  }

  static loginValidate() {
    return [
      body("email").exists().trim().isEmail().isLength({ max: 255 }),
      body("password").exists().trim().isLength({ min: 6, max: 64 }),
      isValid(),
    ];
  }

  static forgetPasswordValidate() {
    return [
      body("email").exists().trim().isEmail().isLength({ max: 255 }),
      isValid(),
    ];
  }

  static resetPasswordValidate() {
    return [
      body("password").exists().trim().isLength({ min: 6, max: 64 }),
      isValid(),
    ];
  }
}

export default UserValidator;

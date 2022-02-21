import express from "express";
import { body, matchedData, validationResult } from "express-validator";
import { SignupArgs } from "../models/userModels";
import UserService from "../services/userService";

const router = express.Router();

const userService = new UserService();

router.get("/", (req, res) => {
  return res.status(200).send({ status: "testing" });
});

router.post(
  "/",
  body("firstname").isString(),
  body("lastname").isString(),
  body("email").isEmail(),
  body("password").isString(),
  async (req, res) => {
    // Validate request body
    const errors = validationResult(req);
    // Strip unnecessary fields and assign to variable
    const newUserData = matchedData(req, { locations: ["body"] }) as SignupArgs;

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await userService.createOneUser(newUserData);
    return res.status(200).send({ status: "test" });
  }
);

export default router;

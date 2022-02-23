import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
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

    try {
      await userService.createOneUser(newUserData);
      return res.status(200).send({ status: "success" });
    } catch (e: any) {
      if (
        e.code === "P2002" &&
        e.meta?.target.length === 1 &&
        e.meta?.target[0] === "email"
      ) {
        return res.status(400).send({ error: "non_unique_email" });
      }
      return res.status(500).send({ error: "unhandled_error" });
    }
  }
);

export default router;

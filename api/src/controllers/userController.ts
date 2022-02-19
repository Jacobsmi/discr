import express from "express";
import { body, matchedData, validationResult } from "express-validator";

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).send({ status: "testing" });
});

router.post(
  "/",
  body("firstname").isString(),
  body("lastname").isString(),
  body("email").isEmail(),
  body("password").isString(),
  (req, res) => {
    // Validate request body
    const errors = validationResult(req);
    // Strip unused body
    const allData = matchedData(req, { locations: ["body"] });

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return res.status(200).send({ status: "test" });
  }
);

export default router;

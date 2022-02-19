import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).send({ status: "testing" });
});

router.post("/", (req, res) => {
  return res.status(200).send({ status: "test" });
});
export default router;

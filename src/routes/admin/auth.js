import { Router } from "express";
const router = Router();

router.post("/register", (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});

router.post("/login", (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});
export default router;

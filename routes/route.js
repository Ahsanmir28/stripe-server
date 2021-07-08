import express from "express";
import {
  getStripeCoupons,
  deleteStripeCoupons,
  createStripeCoupons,
} from "../controller/crud.js";
import { signin, signup } from "../controller/user.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/get-stripe-coupons", getStripeCoupons);
router.post("/create-stripe-coupons", auth, createStripeCoupons);
router.delete("/delete/:id", auth, deleteStripeCoupons);
router.post("/signin", signin);
router.post("/signup", signup);

export default router;

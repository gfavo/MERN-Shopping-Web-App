import express from 'express';
import { logIn ,signUp, getAllUsers, removeAllUsers, buyItems } from '../controllers/user.js'
import auth from "../middlewares/auth.js";

const router = express();

router.get("/",getAllUsers);
router.post("/signup",signUp);
router.post("/login",logIn);
router.delete("/",removeAllUsers);
router.patch("/buyItems", auth, buyItems);

export default router;
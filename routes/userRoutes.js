import express from "express";
import {deleteUser, filterUserByName, getAllUser, getUser, loginUser, register, updateUser,} from "../controllers/UserControllers.js";
import { admin,protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/reg",register);
router.get("/get", admin ,getAllUser);
router.get("/get:id",getUser);
router.put("/update:id",updateUser);
router.delete("/delete:id",deleteUser);
router.get("/filter",filterUserByName);
router.post("/login",loginUser);





export default router;




import express from "express";
import { newUser } from "../controller/userController.js";

const router =express.Router();

router.get(`/new`,newUser)

export default router;
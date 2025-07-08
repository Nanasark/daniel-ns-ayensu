import { Router } from "express";
import { userController } from "./user.controller";

const router = Router()

router.post('/', userController.registerUser)
router.post('/', userController.loginUser)

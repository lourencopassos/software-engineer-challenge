import express from "express";
import { UserController } from "../controller/user_controller";


export const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/", userController.getUsers);
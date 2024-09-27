import { UserController } from "../controller";
import { Router } from "../types";

const userController = new UserController();

export const userRouter: Router = {
  "POST/user/sign-in": {
    controller: (req, res) => {
      const userController = new UserController();
      userController.signIn(req, res);
    },
  },
};

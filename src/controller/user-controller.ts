import { ServerResponse } from "node:http";
import { SignInParams } from "../types";
import { BaseController } from "./base-controller";
import { getRequestBody } from "../util";
import { UserService } from "../service";
import { CustomIncomingMessage } from "../types";

export default class UserController extends BaseController {
  private userService: UserService;

  constructor() {
    super();
    this.userService = new UserService();
  }

  async signIn(req: CustomIncomingMessage, res: ServerResponse) {
    try {
      const start = Date.now();
      const data = await getRequestBody<SignInParams>(req);

      // TODO: validate data

      const response = await this.userService.signIn(data);

      UserController.sendResponse(
        response.code,
        response,
        res,
        "Sign in successful!"
      );
    } catch (error) {
      console.log(error);
      UserController.sendError(500, "Internal Server Error", res);
    }
  }
}

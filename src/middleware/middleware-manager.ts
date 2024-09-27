import { ServerResponse } from "node:http";
import { CustomIncomingMessage, Middleware } from "../types";
import { Response } from "../types";

/**
 * Manage the execution order of middleware functions.
 * It allows you to add multiple middleware functions to a queue
 * and execute them sequentially during a request.
 *
 * @export
 * @class MiddlewareManager
 */
export default class MiddlewareManager {
  private readonly middlewares: Middleware[];

  constructor() {
    this.middlewares = [];
  }

  use(func: Middleware) {
    this.middlewares.push(func);
  }

  run(req: CustomIncomingMessage, res: ServerResponse) {
    const runner = async (index: number) => {
      const middleware = this.middlewares[index];
      if (middleware) {
        try {
          await middleware(req, res, () => {
            return runner(index + 1);
          });
        } catch (error) {
          res.setHeader("contonte-type", "application/json");
          res.writeHead(500);
          const response: Response = {
            code: 500,
            message: "Internal Server Error",
            data: null,
          };
          res.write(JSON.stringify(response));
          res.end();
          throw error;
        }
      }
    };

    runner(0);
  }
}

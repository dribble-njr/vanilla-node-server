## Vanilla Node Server

Use vanilla ts and node to build a simple server. It implements the following architecture:

- [app](./src/index.ts)
- [Middleware](./src/middleware/index.ts)
- [Router](./src/router/index.ts)
- [Controller](./src/controller/index.ts)
- [Server](./src/index.ts)
- [DAO](./src/dao/index.ts)

It just provide a demo to show how to implement it.

If you want to use it in production, you can use [Express](https://expressjs.com/)、[Hapi](https://hapijs.com/) or [Koa](https://koajs.com/).

By the way, in this project, it use the cloude database [Turso](https://turso.dev/) to store data.

If you want to use other database. Just change the environment variable `TURSO_URL` and `TURSO_AUTH_TOKEN`. And you should also change the [DAO](./src/dao/index.ts) to adapt your database.

import { IncomingMessage, ServerResponse } from "node:http";

export interface Route {
  controller: Controller;
  middlewares?: Middleware[]; // route-specific middleware
}

export interface Router {
  [key: string]: Route;
}

export interface CustomIncomingMessage extends IncomingMessage {
  params: Record<string, string>;
}

export type Controller = (
  req: CustomIncomingMessage,
  res: ServerResponse
) => void;

export type Middleware = (
  req: CustomIncomingMessage,
  res: ServerResponse,
  next: () => void
) => void;

export interface Response<T = unknown> {
  code: number;
  message: string;
  data?: T;
}

export interface Category {
  id?: number;
  name?: string;
  description?: string;
  goods?: Commodity[];
}

export interface Commodity {
  id?: number;
  name?: string;
  price?: number;
  categoryId?: number;
  description?: string;
  image?: string;
}

export interface User {
  id: number;
  name: string;
  password: string;
}

export interface SignInParams {
  name: string;
  password: string;
}


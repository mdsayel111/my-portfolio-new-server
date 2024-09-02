/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from "express";

export type TRouterObjects = { path: string; router: Router }[];

export type TResponse = {
  status: number;
  message: string;
  data?: any;
  error?: any;
  stack?: string;
};

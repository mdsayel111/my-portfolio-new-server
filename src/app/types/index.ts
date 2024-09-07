/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from "express";

export type TRouterObjects = { path: string; router: Router }[];

// create TResponse type
export type TResponse = {
  status: number;
  message: string;
  data?: any;
  error?: any;
  stack?: string;
};

// create TRole type
export type TRole = "admin"

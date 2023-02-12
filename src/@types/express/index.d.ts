import * as express from "express";

declare global{
    namespace Express{
      interface Request {
          employee: {
          id: string;
          isAdm: boolean;
      }
    }
  }
}

export {}
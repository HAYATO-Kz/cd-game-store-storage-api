import { Router, Request, Response } from "express";
import { DataRouter } from "./data/routes/data.router";
import { UserRouter } from "./users/routes/user.router";

const router: Router = Router();

router.use("/data", DataRouter);
// router.use("/users", UserRouter);

export const IndexRouter: Router = router;

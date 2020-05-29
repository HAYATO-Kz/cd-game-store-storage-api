import { Router, Request, Response } from "express";
import * as AWS from "../../../../s3";
const fetch = require("node-fetch");
const router: Router = Router();

// Get to image in bucket
router.get("/:fileName", async (req: Request, res: Response) => {
  let { fileName } = req.params;
  const url = await AWS.getGetSignedUrl(fileName);
  res.status(201).send({ url: url });
});

// Get a signed url to put a new record to bucket
router.get("/signed-url/:fileName", async (req: Request, res: Response) => {
  let { fileName } = req.params;
  const url = AWS.getPutSignedUrl(fileName);
  res.status(201).send({ url: url });
});

export const DataRouter: Router = router;

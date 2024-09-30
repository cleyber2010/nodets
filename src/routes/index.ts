import { Router } from "express";
import * as AppController from "../controllers/AppController";

const router = Router();

router.get("/", AppController.home);
router.get("/dogs", AppController.dogs);
router.get("/cats", AppController.cats);
router.get("/fishes", AppController.fishes);
router.get("/search", AppController.search);

export default router;
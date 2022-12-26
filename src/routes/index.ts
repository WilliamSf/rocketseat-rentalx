import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specifcationsRoutes } from "./specifcations.routes";

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifcations', specifcationsRoutes);

export { router };
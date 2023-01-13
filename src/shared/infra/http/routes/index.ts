import { Router } from "express";
import { authenticateRoutes } from "./authenticate.route";
import { categoriesRoutes } from "./categories.routes";
import { specifcationsRoutes } from "./specifcations.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifcations', specifcationsRoutes);
router.use('/users', usersRoutes);
router.use(authenticateRoutes);

export { router };
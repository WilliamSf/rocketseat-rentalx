import { Router } from "express";
import { authenticateRoutes } from "./authenticate.route";
import { carsRoutes } from "./cars.routes";
import { categoriesRoutes } from "./categories.routes";
import { specifcationsRoutes } from "./specifcations.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifcations', specifcationsRoutes);
router.use('/users', usersRoutes);
router.use('/cars', carsRoutes);
router.use(authenticateRoutes);

export { router };
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specifcationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specifcationsRoutes.use(ensureAuthenticated);
specifcationsRoutes.post('/', createSpecificationController.handle);

export { specifcationsRoutes };
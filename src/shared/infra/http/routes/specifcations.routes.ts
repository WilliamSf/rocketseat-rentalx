import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { Router } from "express";

const specifcationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specifcationsRoutes.use(ensureAuthenticated);
specifcationsRoutes.post('/', createSpecificationController.handle);

export { specifcationsRoutes };
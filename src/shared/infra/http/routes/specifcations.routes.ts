import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const specifcationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specifcationsRoutes.post('/',
    ensureAuthenticated,
    ensureAdmin,
    createSpecificationController.handle
);

export { specifcationsRoutes };
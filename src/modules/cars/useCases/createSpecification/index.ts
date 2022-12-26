import { SpecifcationsRepository } from "../../repositories/implementations/SpecifcationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specifcationsRepository = new SpecifcationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specifcationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController };
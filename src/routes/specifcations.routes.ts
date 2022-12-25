import { Router } from "express";
import { SpecifcationsRepository } from '../modules/cars/repositories/SpecifcationsRepository';
import { CreateSpecifcationService } from '../modules/cars/services/CreateSpecifcationService';

const specifcationsRoutes = Router();

const specifcationsRepository = new SpecifcationsRepository();

specifcationsRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    const createSpecifcationService = new CreateSpecifcationService(specifcationsRepository);
    createSpecifcationService.execute({ name, description });
   
    return response.status(201).send();
});

export { specifcationsRoutes };
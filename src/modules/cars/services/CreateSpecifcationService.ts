import { ISpecifcationsRepository } from '../repositories/ISpecifcationsRepository';

interface IRequest {
    name: string;
    description: string;
}
class CreateSpecifcationService {
    constructor(private specifcationsRepository: ISpecifcationsRepository) {}

    execute({ name, description }: IRequest): void {
        const specifcationAlreadyExists = this.specifcationsRepository.findByName(name);
        if(specifcationAlreadyExists) {
            throw new Error('Specifcation already exists!');
        }
    
        this.specifcationsRepository.create({name, description});
    }
}

export { CreateSpecifcationService };
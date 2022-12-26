import { ISpecifcationsRepository } from '../../repositories/ISpecifcationsRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specifcationsRepository: ISpecifcationsRepository) {}

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists = this.specifcationsRepository.findByName(name);
        if(categoryAlreadyExists) {
            throw new Error('Specifcation already exists!');
        }
    
        this.specifcationsRepository.create({name, description});
    }
}

export { CreateSpecificationUseCase }; 
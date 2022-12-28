import { inject, injectable } from 'tsyringe';
import { ISpecifcationsRepository } from '../../repositories/ISpecifcationsRepository';

interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject('SpecifcationsRepository')
        private specifcationsRepository: ISpecifcationsRepository
    ) {}

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists = this.specifcationsRepository.findByName(name);
        if(categoryAlreadyExists) {
            throw new Error('Specifcation already exists!');
        }
    
        this.specifcationsRepository.create({name, description});
    }
}

export { CreateSpecificationUseCase }; 
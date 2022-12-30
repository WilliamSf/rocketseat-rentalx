import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
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

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.specifcationsRepository.findByName(name);
        if(categoryAlreadyExists) {
            throw new AppError('Specifcation already exists!');
        }
    
        await this.specifcationsRepository.create({name, description});
    }
}

export { CreateSpecificationUseCase }; 
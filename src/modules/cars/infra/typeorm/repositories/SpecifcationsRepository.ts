import { getRepository, Repository } from 'typeorm';
import { Specifcation } from '../entities/Specifcation';
import { ICreateSpecifcationDTO, ISpecifcationsRepository } from '../../../repositories/ISpecifcationsRepository';

class SpecifcationsRepository implements ISpecifcationsRepository {
    private specifcations: Repository<Specifcation>;

    constructor() {
        this.specifcations = getRepository(Specifcation);
    }

    async create({ name, description }: ICreateSpecifcationDTO): Promise<void> {
        const specifcation = this.specifcations.create({
            name,
            description
        });

        await this.specifcations.save(specifcation);
    }

    async findByName(name: string): Promise<Specifcation> {
        const specifcation = await this.specifcations.findOne({ name });
        return specifcation;
    }

}

export { SpecifcationsRepository };
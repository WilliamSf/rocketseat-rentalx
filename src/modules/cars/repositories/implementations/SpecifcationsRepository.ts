import { Specifcation } from '../../model/Specifcation';
import { ICreateSpecifcationDTO, ISpecifcationsRepository } from '../ISpecifcationsRepository';

class SpecifcationsRepository implements ISpecifcationsRepository {
    private specifcations: Specifcation[];

    constructor() {
        this.specifcations = [];
    }

    create({ name, description }: ICreateSpecifcationDTO): void {
        const specifcation = new Specifcation();

        Object.assign(specifcation, {
            name,
            description,
            created_at: new Date()
        });

        this.specifcations.push(specifcation);
    }

    findByName(name: string): Specifcation {
        return this.specifcations.find(specifcation => specifcation.name === name);
    }

}

export { SpecifcationsRepository };
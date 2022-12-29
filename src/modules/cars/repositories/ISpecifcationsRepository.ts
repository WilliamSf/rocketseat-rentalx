import { Specifcation } from "../entities/Specifcation";

interface ICreateSpecifcationDTO {
    name: string;
    description: string;
}

interface ISpecifcationsRepository {
    create({ name, description }: ICreateSpecifcationDTO): Promise<void>;
    findByName(name: string): Promise<Specifcation>;
}

export { ISpecifcationsRepository, ICreateSpecifcationDTO };
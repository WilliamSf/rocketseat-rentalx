import { Specifcation } from "../entities/Specifcation";

interface ICreateSpecifcationDTO {
    name: string;
    description: string;
}

interface ISpecifcationsRepository {
    create({ name, description }: ICreateSpecifcationDTO): void;
    findByName(name: string): Specifcation;
}

export { ISpecifcationsRepository, ICreateSpecifcationDTO };
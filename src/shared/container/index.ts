import { container } from 'tsyringe';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecifcationsRepository } from '../../modules/cars/repositories/implementations/SpecifcationsRepository';
import { ISpecifcationsRepository } from '../../modules/cars/repositories/ISpecifcationsRepository';

container.registerSingleton<ICategoriesRepository>(
    'CategoriesRepository',
    CategoriesRepository
);

container.registerSingleton<ISpecifcationsRepository>(
    'SpecifcationsRepository',
    SpecifcationsRepository
);
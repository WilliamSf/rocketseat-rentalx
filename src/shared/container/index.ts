import { container } from 'tsyringe';
import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/CategoriesRepository';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { SpecifcationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecifcationsRepository';
import { ISpecifcationsRepository } from '@modules/cars/repositories/ISpecifcationsRepository';

container.registerSingleton<ICategoriesRepository>(
    'CategoriesRepository',
    CategoriesRepository
);

container.registerSingleton<ISpecifcationsRepository>(
    'SpecifcationsRepository',
    SpecifcationsRepository
);

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
);
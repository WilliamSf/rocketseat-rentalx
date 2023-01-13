import { AppError } from "../../../../shared/errors/AppError";
import CategoriesRepositoryInMemory from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

describe('Create Category', () => {
    let createCategoryUseCase: CreateCategoryUseCase;
    let categoriesRepositoryInMemory:CategoriesRepositoryInMemory;
    
    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
    });

    it('should be able to create new category', async () => {
        const newCategory = {
            name: 'Category Test',
            description: 'Category description Test'
        };

        await createCategoryUseCase.execute(newCategory);
        
        const categoryCreated = await categoriesRepositoryInMemory.findByName(
            newCategory.name
        );

        expect(categoryCreated).toHaveProperty('id');
    });

    it('should not be able to create new category with name exists', async () => {
        expect(async () => {
            const newCategory = {
                name: 'Category Test',
                description: 'Category description Test'
            };
    
            await createCategoryUseCase.execute(
                newCategory
            );
            
            await createCategoryUseCase.execute(
                newCategory
            );
        }).rejects.toBeInstanceOf(AppError);
    });
});
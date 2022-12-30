import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new AppError('Token missing!', 401);
    }

    try {
        const [, token] = authHeader.split(' ');
        const { sub } = verify(token, '9eb71ab7420eb452a22787ca4fab501b') as IPayload;
        
        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(sub);
        if(!user) {
            throw new AppError('User does not exists!', 401);
        }

        next();
    } catch {
        throw new AppError('Invalid token!', 401);
    }
}
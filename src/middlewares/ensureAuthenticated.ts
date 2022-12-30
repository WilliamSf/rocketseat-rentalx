import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new Error('Token missing!');
    }

    try {
        const [, token] = authHeader.split(' ');
        const { sub } = verify(token, '9eb71ab7420eb452a22787ca4fab501b') as IPayload;
        
        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(sub);
        if(!user) {
            throw new Error('User does not exists!');
        }

        next();
    } catch {
        throw new Error('Invalid token!');
    }
}
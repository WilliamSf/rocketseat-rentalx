import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string
    },
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse>  {
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new AppError('Email or password incorrect!');
        }

        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new AppError('Email or password incorrect!');
        }

        const token = sign({}, '9eb71ab7420eb452a22787ca4fab501b', {
            subject: user.id,
            expiresIn: '1d'
        });

        return {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        };
    }
}

export { AuthenticateUserUseCase };
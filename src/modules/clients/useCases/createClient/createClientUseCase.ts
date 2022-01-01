import { ICreateClient } from "../../dtos/ICreateClient";
import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../shared/error/AppError";
import { hash } from "bcrypt";


export class CreateClientUseCase {



    public async execute({username, password}: ICreateClient) {
        //validate if user already exist

        const userExist = await prisma.clients.findFirst({
            where: {
                username: {
                    mode: "insensitive"
                }
            }
        })

        if(userExist){ 
            throw new AppError("Username already exist.", 401)
        }

        //criptography user`s password

        const encryptedPass = await hash(password, 10)

        //salvar user

        const user = await prisma.clients.create({
            data: {
                username,
                password: encryptedPass
            }
        })

        return user
    }
}
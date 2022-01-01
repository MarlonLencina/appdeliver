import { ICreateClient } from "../../dtos/ICreateClient";
import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../shared/error/AppError";
import { hash } from "bcrypt";


export class CreateClientUseCase {

    public async execute({username, password}: ICreateClient) {

        const toLowerCaseUsername = username.toLowerCase()

        const userExist = await prisma.clients.findFirst({
            where: {
                username: toLowerCaseUsername
            }
        })

        console.log(userExist)

        if(userExist){ 
            throw new AppError("Username already exist.", 401)
        }

        const encryptedPass = await hash(password, 10)

        const user = await prisma.clients.create({
            data: {
                username: toLowerCaseUsername,
                password: encryptedPass
            }
        })

        return user
    }
}

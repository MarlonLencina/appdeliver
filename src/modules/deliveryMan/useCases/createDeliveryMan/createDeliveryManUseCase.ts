import { ICreateDeliveryMan } from "../../dtos/ICreateDeliveryMan";
import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../shared/error/AppError";
import { hash } from "bcrypt";


export class CreateDeliveryManUseCase {

    public async execute({username, password}: ICreateDeliveryMan) {

        const toLowerCaseUsername = username.toLowerCase()

        const deliveryManExist = await prisma.deliveryMan.findFirst({
            where: {
                username: toLowerCaseUsername
            }
        })

        if(deliveryManExist){ 
            throw new AppError("Username already exist.", 401)
        }

        const encryptedPass = await hash(password, 10)

        const deliveryMan = await prisma.deliveryMan.create({
            data: {
                username: toLowerCaseUsername,
                password: encryptedPass
            }
        })

        return deliveryMan
    }
}

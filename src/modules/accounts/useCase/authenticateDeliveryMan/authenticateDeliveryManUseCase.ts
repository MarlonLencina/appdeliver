import { compare } from "bcryptjs"
import { prisma } from "../../../../database/prismaClient"
import { AppError } from "../../../../shared/error/AppError"
import { sign } from "jsonwebtoken"
import auth from "../../../../config/auth"

interface IRequest {
    username: string
    password: string
}

export class AuthenticateDeliveryManUseCase {


    public async execute({username, password}: IRequest) {
       
        const lowerCaseUsername = username.toLowerCase()
        const deliveryManExist = await prisma.deliveryMan.findFirst({
            where: {
                username: lowerCaseUsername
            }
        })

        if(!deliveryManExist){
            throw new AppError("Incorrect crendentials.", 401)
        }
        
        const passwordMatch = await compare(password, deliveryManExist.password)

        console.log(passwordMatch)

        if(!passwordMatch){
            throw new AppError("Incorrect crendentials.", 401)
        }

        const token = sign({
            username: lowerCaseUsername
        }, auth.JWT_deliveryman_secret, {
            subject: deliveryManExist.id,
            expiresIn: "1d"
        })

        return token
    }
}
import { compare } from "bcrypt"
import { prisma } from "../../../database/prismaClient"
import { AppError } from "../../../shared/error/AppError"
import { sign } from "jsonwebtoken"
import auth from "../../../config/auth"

interface IRequest {
    username: string
    password: string
}

export class AuthenticateUserClientUseCase {


    public async execute({username, password}: IRequest) {
       
        const lowerCaseUsername = username.toLowerCase()
        const userExist = await prisma.clients.findFirst({
            where: {
                username: lowerCaseUsername
            }
        })

        if(!userExist){
            throw new AppError("Incorrect crendentials.", 401)
        }
        
        const passwordMatch = await compare(password, userExist.password)

        console.log(passwordMatch)

        if(!passwordMatch){
            throw new AppError("Incorrect crendentials.", 401)
        }

        const token = sign({
            username: lowerCaseUsername
        }, auth.JWT_secret, {
            subject: userExist.id,
            expiresIn: "1d"
        })

        return token
    }
}
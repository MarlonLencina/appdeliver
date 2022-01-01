import { AuthenticateDeliveryManUseCase } from "./authenticateDeliveryManUseCase"

import { Request, Response } from "express"

export class AuthenticateDeliveryManController {

    public async handle(req: Request, res: Response) {

        const { username, password } = req.body

        const authenticateDeliveryManUseCase = new AuthenticateDeliveryManUseCase()

        const result = await authenticateDeliveryManUseCase.execute({ username, password })

        res.json({
            message: "delivery man was successfully logged",
            result
        })
    }
 }
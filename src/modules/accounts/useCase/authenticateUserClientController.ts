import { AuthenticateUserClientUseCase } from "./authenticateUserClientUseCase"

import { Request, Response } from "express"

export class AuthenticateClientController {

    public async handle(req: Request, res: Response) {

        const { username, password } = req.body

        const authenticateUserClientUseCase = new AuthenticateUserClientUseCase()

        const result = await authenticateUserClientUseCase.execute({ username, password })

        res.json({
            message: "user was successfully logged",
            result
        })
    }
 }
import {
    Request,
    Response
} from 'express'
import { CreateClientUseCase } from './createClientUseCase'

export class CreateClientController {
    public async handle(req: Request, res: Response) {

        const createClientUseCase = new CreateClientUseCase()
        const { username, password } = req.body

        const result = await createClientUseCase.execute({ username, password })

        res.json({
            message: "user was successfully created",
            result
        })
    }

}
import {
    Request,
    Response
} from 'express'
import { CreateDeliveryManUseCase } from './createDeliveryManUseCase'

export class CreateDeliveryManController {
    public async handle(req: Request, res: Response) {

        const createDeliveryManUseCase = new CreateDeliveryManUseCase()
        const { username, password } = req.body

        const result = await createDeliveryManUseCase.execute({ username, password })

        res.json({
            message: "deliveryMan was successfully created",
            result
        })
    }

}
import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./createDeliveryUseCase";

export class CreateDeliveryController {


    public async handle(req: Request, res: Response) {

    const createDeliveryUseCase = new CreateDeliveryUseCase()

    const { item_name, id_client} = req.body

    const result = await createDeliveryUseCase.execute({
        item_name,
        id_client
    })

    res.json({
        message: "delivery was created",
        result 
    })

    }
}
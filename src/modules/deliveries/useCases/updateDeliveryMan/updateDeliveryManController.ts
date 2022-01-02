import { Request, Response } from "express";
import { UpdateDeliveryManUseCase } from "./updateDeliveryManUseCase";

export class UpdateDeliveryManController {
  public async handle(req: Request, res: Response) {
    const { id_delivery_man } = req.body;
    const { id: id_delivery } = req.params;

    const updateDeliveryManUseCase = new UpdateDeliveryManUseCase();

    const delivery = await updateDeliveryManUseCase.execute({
        id_delivery,
        id_delivery_man
    })

    return res.json({
        delivery
    })
  }
}

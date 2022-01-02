import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./updateEndDataUseCase";

export class UpdateEndDateController {
  public async handle(req: Request, res: Response) {
    const { id_delivery_man } = req.body;
    const { id: id_delivery } = req.params;

    const updateEndDateUseCase = new UpdateEndDateUseCase();

    const delivery = await updateEndDateUseCase.execute({
      id_delivery,
      id_delivery_man,
    });

    return res.json({
      message: "Delivery was updated",
      delivery
    });
  }
}

import { Request, Response } from "express";
import { FindAllDeliveriesDeliveryManUseCase } from "./FindAllDeliveriesDeliveryManUseCase";

export class FindAllDeliveriesDeliveryManController {
  public async handle(req: Request, res: Response) {
    const { id_client } = req;

    const findAllDeliveriesDeliveryManUseCase = new FindAllDeliveriesDeliveryManUseCase();

    const result = await findAllDeliveriesDeliveryManUseCase.execute(id_client);

    return res.json({
      result,
    });
  }
}

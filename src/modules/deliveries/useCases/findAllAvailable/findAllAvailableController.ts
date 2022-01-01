import { Request, Response } from "express";
import { FindAllWithoutEndDateUseCase } from "./findAllAvailableUseCase";

export class FindAllAvailableController {

    public async handle(req: Request, res: Response) {

        const findAllWithoutEndDateUseCase = new FindAllWithoutEndDateUseCase()

        const result = await findAllWithoutEndDateUseCase.execute()

        res.json({
            message: "All Deliveries Available",
            result
        })

    }
}
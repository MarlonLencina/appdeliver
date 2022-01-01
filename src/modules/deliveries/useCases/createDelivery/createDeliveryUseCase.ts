import { ICreateDeliveryDTO } from "../../dtos/ICreateDeliveryDTO";
import { prisma } from "../../../../database/prismaClient";


export class CreateDeliveryUseCase {


    public async execute({
    item_name,
    id_client
    }: ICreateDeliveryDTO){
       
        const delivery = await prisma.deliveries.create({
            data: {
                item_name,
                id_client
            }
        })

        return delivery
    }
}
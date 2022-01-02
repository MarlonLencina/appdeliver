import { prisma } from "../../../../database/prismaClient";

interface IUpdateDeliveryMan {
  id_delivery: string;
  id_delivery_man: string;
}

export class UpdateDeliveryManUseCase {
  public async execute({ id_delivery, id_delivery_man }: IUpdateDeliveryMan) {
    const result = await prisma.deliveries.update({
      where: {
        id: id_delivery,
      },
      data: {
        id_delivery_man,
      },
    });

    return result
  }
}

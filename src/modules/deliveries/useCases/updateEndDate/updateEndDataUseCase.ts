import { prisma } from "../../../../database/prismaClient";

interface IUpdateDeliveryMan {
  id_delivery: string;
  id_delivery_man: string;
}

export class UpdateEndDateUseCase {
  public async execute({ id_delivery, id_delivery_man }: IUpdateDeliveryMan) {
    const result = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_delivery_man: id_delivery_man,
      },
      data: {
        end_at: new Date(),
      },
    });

    return result;
  }
}

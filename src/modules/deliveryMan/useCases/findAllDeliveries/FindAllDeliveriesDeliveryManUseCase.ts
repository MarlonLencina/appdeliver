import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesDeliveryManUseCase {
  public async execute(id_deliveryMan: string) {
    const deliveries = await prisma.deliveryMan.findMany({
      where: {
        id: id_deliveryMan,
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });

    return deliveries;
  }
}

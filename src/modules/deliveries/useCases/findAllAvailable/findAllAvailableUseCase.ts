import { prisma } from "../../../../database/prismaClient";


export class FindAllWithoutEndDateUseCase {


    public async execute() {


        const deliveries = await prisma.deliveries.findMany({
            where: {
                end_at: null
            }
        })

        return deliveries

    }
}
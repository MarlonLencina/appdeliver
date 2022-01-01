
import { Router } from "express";
import { CreateDeliveryController } from "../../../../modules/deliveries/useCases/createDelivery/createDeliveryController";

const deliveryRouter = Router()

const createDeliveryController = new CreateDeliveryController()

deliveryRouter.post('/', createDeliveryController.handle)

export { deliveryRouter }
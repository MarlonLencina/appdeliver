import { Router } from "express";
import { CreateDeliveryManController } from "../../../../modules/deliveryMan/useCases/createDeliveryMan/createDeliveryManController";

const deliveryManRouter = Router()

const createDeliveryManController = new CreateDeliveryManController()

deliveryManRouter.post('/', createDeliveryManController.handle)
// deliveryManRouter.post('/signin', authenticateClientController.handle)


export {
    deliveryManRouter
}
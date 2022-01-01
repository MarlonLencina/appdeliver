import { Router } from "express";
import { AuthenticateDeliveryManController } from "../../../../modules/accounts/useCase/authenticateDeliveryMan/authenticateDeliveryManController";
import { CreateDeliveryManController } from "../../../../modules/deliveryMan/useCases/createDeliveryMan/createDeliveryManController";

const deliveryManRouter = Router()

const createDeliveryManController = new CreateDeliveryManController()
const authenticateDeliveryManController = new AuthenticateDeliveryManController()

deliveryManRouter.post('/', createDeliveryManController.handle)
deliveryManRouter.post('/signin', authenticateDeliveryManController.handle)


export {
    deliveryManRouter
}

import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateDeliveryController } from "../../../../modules/deliveries/useCases/createDelivery/createDeliveryController";
import { FindAllAvailableController } from "../../../../modules/deliveries/useCases/findAllAvailable/findAllAvailableController";

const deliveryRouter = Router()

const createDeliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()

deliveryRouter.post('/', ensureAuthenticated, createDeliveryController.handle)

deliveryRouter.get('/', ensureAuthenticated, findAllAvailableController.handle)

export { deliveryRouter }
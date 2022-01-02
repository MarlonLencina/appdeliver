
import { Router } from "express";
import { ensureAuthenticatedClient } from "../middleware/ensureAuthenticatedClient";
import { CreateDeliveryController } from "../../../../modules/deliveries/useCases/createDelivery/createDeliveryController";
import { FindAllAvailableController } from "../../../../modules/deliveries/useCases/findAllAvailable/findAllAvailableController";

const deliveryRouter = Router()

const createDeliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()

deliveryRouter.post('/', ensureAuthenticatedClient, createDeliveryController.handle)

deliveryRouter.get('/', ensureAuthenticatedClient, findAllAvailableController.handle)

export { deliveryRouter }
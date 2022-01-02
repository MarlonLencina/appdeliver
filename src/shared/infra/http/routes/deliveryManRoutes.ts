import { Router } from "express";
import { AuthenticateDeliveryManController } from "../../../../modules/accounts/useCase/authenticateDeliveryMan/authenticateDeliveryManController";
import { UpdateDeliveryManController } from "../../../../modules/deliveries/useCases/updateDeliveryMan/updateDeliveryManController";
import { CreateDeliveryManController } from "../../../../modules/deliveryMan/useCases/createDeliveryMan/createDeliveryManController";
import { ensureAuthenticatedDeliveryMan } from "../middleware/ensureAuthenticatedDeliveryMan";

const deliveryManRouter = Router();

const updateDeliveryManController = new UpdateDeliveryManController();
const createDeliveryManController = new CreateDeliveryManController();
const authenticateDeliveryManController =
  new AuthenticateDeliveryManController();

deliveryManRouter.post("/", createDeliveryManController.handle);
deliveryManRouter.post("/signin", authenticateDeliveryManController.handle);
deliveryManRouter.put("/delivery/:id", ensureAuthenticatedDeliveryMan,updateDeliveryManController.handle);

export { deliveryManRouter };

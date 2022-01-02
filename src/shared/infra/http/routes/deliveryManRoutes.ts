import { Router } from "express";
import { AuthenticateDeliveryManController } from "../../../../modules/accounts/useCase/authenticateDeliveryMan/authenticateDeliveryManController";
import { UpdateDeliveryManController } from "../../../../modules/deliveries/useCases/updateDeliveryMan/updateDeliveryManController";
import { CreateDeliveryManController } from "../../../../modules/deliveryMan/useCases/createDeliveryMan/createDeliveryManController";
import { FindAllDeliveriesDeliveryManController } from "../../../../modules/deliveryMan/useCases/findAllDeliveries/FindAllDeliveriesDeliveryManController";
import { ensureAuthenticatedDeliveryMan } from "../middleware/ensureAuthenticatedDeliveryMan";

const deliveryManRouter = Router();

const findAllDeliveriesDeliveryManController =
  new FindAllDeliveriesDeliveryManController();
const updateDeliveryManController = new UpdateDeliveryManController();
const createDeliveryManController = new CreateDeliveryManController();
const authenticateDeliveryManController =
  new AuthenticateDeliveryManController();

deliveryManRouter.get(
  "/",
  ensureAuthenticatedDeliveryMan,
  findAllDeliveriesDeliveryManController.handle
);
deliveryManRouter.post("/", createDeliveryManController.handle);
deliveryManRouter.post("/signin", authenticateDeliveryManController.handle);
deliveryManRouter.put(
  "/deliveries/:id",
  ensureAuthenticatedDeliveryMan,
  updateDeliveryManController.handle
);

export { deliveryManRouter };

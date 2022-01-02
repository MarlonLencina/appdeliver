import { Router } from "express";
import { ensureAuthenticatedClient } from "../middleware/ensureAuthenticatedClient";
import { CreateDeliveryController } from "../../../../modules/deliveries/useCases/createDelivery/createDeliveryController";
import { FindAllAvailableController } from "../../../../modules/deliveries/useCases/findAllAvailable/findAllAvailableController";
import { ensureAuthenticatedDeliveryMan } from "../middleware/ensureAuthenticatedDeliveryMan";
import { UpdateEndDateController } from "../../../../modules/deliveries/useCases/updateEndDate/updateEndDateController";

const deliveryRouter = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateEndDateController = new UpdateEndDateController();

deliveryRouter.put(
  "/:id",
  ensureAuthenticatedDeliveryMan,
  updateEndDateController.handle
);

deliveryRouter.post(
  "/",
  ensureAuthenticatedClient,
  createDeliveryController.handle
);

deliveryRouter.get(
  "/",
  ensureAuthenticatedClient,
  findAllAvailableController.handle
);

export { deliveryRouter };

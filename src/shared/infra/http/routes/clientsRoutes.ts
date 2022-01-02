import { Router } from "express";
import { CreateClientController } from "../../../../modules/clients/useCases/createClient/createClientController";
import { AuthenticateClientController } from "../../../../modules/accounts/useCase/authenticateUser/authenticateUserClientController";
import { FindAllDeliveriesController } from "../../../../modules/clients/useCases/findAllDeliveries/findAllDeliveriesController";
import { ensureAuthenticatedDeliveryMan } from "../middleware/ensureAuthenticatedDeliveryMan";
import { ensureAuthenticatedClient } from "../middleware/ensureAuthenticatedClient";

const clientsRouter = Router();
const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findAllDeliveriesController = new FindAllDeliveriesController();

clientsRouter.post("/", createClientController.handle);
clientsRouter.post("/signin", authenticateClientController.handle);
clientsRouter.get(
  "/deliveries",
  ensureAuthenticatedClient,
  findAllDeliveriesController.handle
);

export { clientsRouter };

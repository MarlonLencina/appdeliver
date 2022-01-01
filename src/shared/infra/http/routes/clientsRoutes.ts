import { Router } from "express";
import { CreateClientController } from "../../../../modules/clients/useCases/createClient/createClientController";
import { AuthenticateClientController } from "../../../../modules/accounts/useCase/authenticateUserClientController";

const clientsRouter = Router()
const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()

clientsRouter.post('/', createClientController.handle)
clientsRouter.post('/signin', authenticateClientController.handle)


export {
    clientsRouter
}
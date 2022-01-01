import { Router } from "express";
import { CreateClientController } from "../../../../modules/clients/useCases/createClient/createClientController";

const clientsRouter = Router()
const createClientController = new CreateClientController()

clientsRouter.post('/', createClientController.handle)

export {
    clientsRouter
}
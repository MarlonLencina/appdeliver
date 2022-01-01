import { Router } from "express";

const router = Router()

import {clientsRouter} from "./clientsRoutes"
import {deliveryManRouter} from "./deliveryManRoutes"

router.use("/clients", clientsRouter)
router.use("/deliveryman", deliveryManRouter)

export {
    router
}
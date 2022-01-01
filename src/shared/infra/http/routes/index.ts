import { Router } from "express";

const router = Router()

import {clientsRouter} from "./clientsRoutes"
import {deliveryManRouter} from "./deliveryManRoutes"
import {deliveryRouter} from "./deliveryRouter"

router.use("/clients", clientsRouter)
router.use("/deliveryman", deliveryManRouter)
router.use("/delivery", deliveryRouter)

export {
    router
}
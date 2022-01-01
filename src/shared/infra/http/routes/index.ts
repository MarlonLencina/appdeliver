import { Router } from "express";

const router = Router()

import {clientsRouter} from "./clientsRoutes"

router.use("/clients", clientsRouter)

export {
    router
}
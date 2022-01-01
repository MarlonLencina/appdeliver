import { Router } from "express";

export const router = Router()

import {clientsRouter} from "./clientsRoutes"

router.use("clients", clientsRouter)
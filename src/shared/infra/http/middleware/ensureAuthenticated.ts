import { NextFunction, Request, Response } from "express";
import { AppError } from "../../../error/AppError";
import {
    verify
} from "jsonwebtoken"

import auth from "../../../../config/auth";

interface IPayload {
    sub: string
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction){

    const authHeader = req.headers.authorization

    if (!authHeader){
        throw new AppError("Token is missing.", 400)
    }

    const [_, token] = authHeader.split(" ")

    try {
        
        const {
            sub
        } = verify(token, auth.JWT_client_secret) as IPayload

        req.id_client = sub

        next()
    } catch (error) {
        throw new AppError("Invalid token", 401)
    }
}
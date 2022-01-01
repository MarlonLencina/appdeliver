import express, { NextFunction, Request, Response } from "express";
import "express-async-errors"
import { AppError } from "../../error/AppError";
import { router } from "./routes";

const app = express()

app.use(express.json())
app.use(router)

// global handler error

app.use(function(err: Error, req: Request, res: Response, next: NextFunction) {
    
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
          error: err.message
        })
    } else {
        return res.status(500).json({
            message: "Internal Server Error",
            stack: err.stack
        })
    }

  });

const port = 3333

app.listen(port, () => {
    console.log(`
    Server started on ${port} ❤️😎👍
    `)
})
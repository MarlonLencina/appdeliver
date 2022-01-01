export class AppError extends Error{

    public readonly statusCode: number
    public message: string;

    constructor(message: string, statusCode: number = 400) {
        super()
        this.message = message
        this.statusCode = statusCode
    }
}
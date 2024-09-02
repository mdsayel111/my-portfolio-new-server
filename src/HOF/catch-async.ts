import { RequestHandler } from "express";
// create catch async wraper fun for catch request handler error and send it to global error handler
const catchAsync = (fun: RequestHandler) => {
    // create a middleware handle async error
    const middleware: RequestHandler = async (req, res, next) => {
        Promise.resolve(fun(req, res, next)).catch((error) => {
            next(error)
        })
    }

    return middleware
}

export default catchAsync
import { HttpRequest, MiddlewareController } from '../../presentation/interfaces'
import { NextFunction, Request, Response } from 'express'
export const AdaptRoute = (middleware: MiddlewareController) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      headers: req.body
    }
    const httpResponse = await middleware.handle(httpRequest)
    if (httpResponse.statusCode === 200) {
      Object.assign(req, httpResponse.body)
      next()
    }
    res.status(httpResponse.statusCode).json({
      error: httpResponse.body.message
    })
  }
}

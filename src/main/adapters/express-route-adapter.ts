import { Controller, HttpRequest } from '../../presentation/interfaces'
import { Request, Response } from 'express'
export const AdaptRoute = (controler: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params
    }
    const httpResponse = await controler.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}

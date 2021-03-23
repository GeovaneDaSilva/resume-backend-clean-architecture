import { HttpRequest, HttpResponse } from './http'

export interface MiddlewareController {

  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}

import { GetMap, GetMapModel } from '../../domain/useCases/get-map'

export class DbGetMapAccount implements GetMap {
  async get (mapAccount: GetMapModel): Promise<GetMapModel> {
    return new Promise(resolve => resolve(
      mapAccount
    ))
  }
}

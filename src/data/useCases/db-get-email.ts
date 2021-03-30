import { IGetEmailProvider, IGetOneEmailProvider, IMessage } from '../../domain/useCases/mail-provider'

export class DbGetEmailAccount implements IGetEmailProvider {
  async getMail (message: IMessage): Promise<IMessage> {
    return new Promise(resolve => resolve(
      message
    ))
  }
}

export class DbGetOneEmailAccount implements IGetOneEmailProvider {
  async getMailById (message: IMessage): Promise<IMessage> {
    return new Promise(resolve => resolve(
      message
    ))
  }
}

import { IGetEmailProvider, IMessage } from '../../domain/useCases/mail-provider'

export class DbGetEmailAccount implements IGetEmailProvider {
  async getMail (message: IMessage): Promise<IMessage> {
    return new Promise(resolve => resolve(
      message
    ))
  }
}

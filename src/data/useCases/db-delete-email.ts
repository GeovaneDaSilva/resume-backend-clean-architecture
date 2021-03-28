import { DeleteEmail, IMessageResponse } from '../../domain/useCases/mail-provider'
import emailService from '../../services/emailService'

export class DeleteEmailAccount implements DeleteEmail {
  async delete (emailAccount: IMessageResponse): Promise<IMessageResponse> {
    const emailAccountDeleted: any = await emailService.delete(emailAccount._id)
    return new Promise(resolve => resolve(
      emailAccountDeleted
    ))
  }
}

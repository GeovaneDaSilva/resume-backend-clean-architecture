import { BusinessCardModel } from '../../../domain/models/business-card'
import { AddCard } from '../../../domain/useCases/business-card/business-card'
import { IQRCode } from '../../../presentation/interfaces/qr-code'
import BusinessCardService from '../../../services/businessCardService'
import { IMailProvider } from '../../../domain/useCases/mail-provider'

export class DbAddCard implements AddCard {
  constructor (private readonly mailAwsProvider: IMailProvider,
    private readonly iQRCode: IQRCode) {
    this.mailAwsProvider = mailAwsProvider
    this.iQRCode = iQRCode
  }

  async add (card: BusinessCardModel): Promise<BusinessCardModel> {
    const cardDB: any = await BusinessCardService.create(card)
    const url = `http://localhost:4200/#/business-card-detail/${cardDB._id}`
    const code = await this.iQRCode.QR(url)

    card.img = await code
    const cardUpdated: any = await BusinessCardService.update(cardDB._id, card)

    await this.mailAwsProvider.sendMail({
      to: {
        name: cardUpdated.name,
        email: cardUpdated.owner_email
      },
      from: {
        name: 'Geovane',
        email: 'process.environments@gmail.com'
      },
      subject: 'Business Card',
      // eslint-disable-next-line @typescript-eslint/quotes
      body: `<h4> Congratulations ${cardUpdated.name}!!! </h4>
      Your business card is ready. <br>
      User: ${cardUpdated.email}
      <br>
      URL BUSINESS CARD: ${url} <br>

        `
    })

    return new Promise(resolve => resolve(
      cardDB
    ))
  }
}

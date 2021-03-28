export interface IAddress {
  email: string
  name: string
}

export interface IMessage {
  to: IAddress
  from: IAddress
  subject: string
  body: string
}

export interface IMessageResponse {
  _id: string
  to: IAddress
  from: IAddress
  subject: string
  body: string
}
export interface IMailProvider {
  sendMail: (message: IMessage) => Promise<void>
}

export interface IGetEmailProvider {
  getMail: (message: IMessage) => Promise<IMessage>
}

export interface DeleteEmail {
  delete: (account: IMessageResponse) => Promise<IMessageResponse>
}

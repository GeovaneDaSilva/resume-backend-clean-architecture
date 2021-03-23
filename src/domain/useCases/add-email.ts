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

export interface AddEmailAccount {
  addMail: (message: IMessage) => Promise<IMessage>
}

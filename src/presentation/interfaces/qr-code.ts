export interface IQRCode {
  QR: (value: string) => Promise<string>
}

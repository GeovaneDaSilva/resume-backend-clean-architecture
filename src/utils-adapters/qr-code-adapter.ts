import QRCode from 'qrcode'
import { IQRCode } from '../presentation/interfaces/qr-code'

export class QRCodeAdapter implements IQRCode {
  async QR (value: string): Promise<string> {
    return QRCode.toDataURL(value)
  }
}

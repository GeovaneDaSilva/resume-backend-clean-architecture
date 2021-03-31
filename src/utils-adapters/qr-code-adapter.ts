import Qrcode from 'qrcode'
import { IQRCode } from '../presentation/interfaces/qr-code'

export class QRCodeAdapter implements IQRCode {
  async QR (value: string, object?: any): Promise<any> {
    const code = await Qrcode.toDataURL(value)
    return code
  }
}

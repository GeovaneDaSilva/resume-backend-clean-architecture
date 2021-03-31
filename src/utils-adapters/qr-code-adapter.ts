import QRCode from 'qrcode'
import { IQRCode } from '../presentation/interfaces/qr-code'

export class QRCodeAdapter implements IQRCode {
  async QR (value: string): Promise<any> {
    const code = await QRCode.toDataURL(value)
    return code
  }
}

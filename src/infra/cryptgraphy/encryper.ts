export interface Cryptography {
  encrypt: (value: string) => Promise<string>
}

export interface Dcryptography {
  dencrypt: (value: string, compary: string) => Promise<Boolean>
}

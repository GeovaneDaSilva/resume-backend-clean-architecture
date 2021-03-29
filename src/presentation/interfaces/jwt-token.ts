export interface IJwt {
  token: (value: string) => Promise<string>
}

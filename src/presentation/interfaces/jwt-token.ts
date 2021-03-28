export interface AuthenticationToken {
  token: (value: string) => Promise<string>
}

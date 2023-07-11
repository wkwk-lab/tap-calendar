export class UserEmail {
  value: string

  constructor(value: string) {
    this.value = value

    if (!this.value.includes('@')) {
      throw new Error('メールアドレスが正しくありません')
    }
  }
}

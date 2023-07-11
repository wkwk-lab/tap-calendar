export class UserName {
  constructor(readonly value: string) {
    this.validation(value)
  }

  private validation(value: unknown) {
    const isValid = typeof value === 'string' && value.length >= 1;
    if (!isValid) {
      throw new Error(`ユーザー名は1文字以上の文字列である必要があります`)
    }
  }
}

import {ulid} from "ulid";

export class UserId {
  readonly value: string

  constructor(value?: string) {
    if (value === undefined) {
      this.value = ulid()
      return
    }

    const isValid = /^[0-9a-hjkmnp-zA-HJKMNP-Z]{26}$/.test(value)

    if (!isValid) {
      throw new Error(`${value} は不正なユーザーIDです`)
    }

    this.value = value
  }
}
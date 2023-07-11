import {describe, test, expect} from "vitest";
import {UserEmail} from "./user-email.ts";

describe('UserEmail', () => {
  test('正しいメールアドレスの文字列を渡したらインスタンスを作れる', () => {
    const email = new UserEmail('info@example.com')
    expect(email.value).toBe('info@example.com')
  })

  test('正しくないメールアドレスの文字列を渡したら例外を投げる', () => {
    expect(() => {
      new UserEmail('invalid')
    }).toThrow('メールアドレスが正しくありません')
  })
})

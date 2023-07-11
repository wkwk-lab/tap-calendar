import {test, expect, describe} from "vitest";
import {UserId} from "./user-id.ts";

describe('UserId', () => {
  test('引数を渡さなければ、新しい ULID で生成する', () => {
    const userId = new UserId()
    expect(userId.value).toMatch(/^[0-9a-hjkmnp-zA-HJKMNP-Z]{26}$/)
  })

  test('正しい ULID を渡すと、インスタンスを生成できる', () => {
    const userId = new UserId('01H462W4H6RNZ1BT50FYC3Z8BN')
    expect(userId.value).toBe('01H462W4H6RNZ1BT50FYC3Z8BN')
  })

  test('ULID 以外の文字列を渡すと、エラーになる', () => {
    expect(() => {
      new UserId('invalid')
    }).toThrow('invalid は不正なユーザーIDです')
  })

  test('ULID 以外の文字列を渡すと、エラーになる：文字数が多いだけのケース', () => {
    expect(() => {
      new UserId('01H4681YT7H7GS1DKZ0AJNRF0G00')
    }).toThrow('01H4681YT7H7GS1DKZ0AJNRF0G00 は不正なユーザーIDです')
  })
})
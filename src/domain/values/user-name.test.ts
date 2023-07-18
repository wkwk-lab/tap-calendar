import { test, expect, describe } from "vitest";
import { UserName } from "./user-name";

describe("UserName", () => {
  test("正しい名前を渡すとインスタンスを返す", () => {
    const userName = new UserName("takenaka");
    expect(userName.value).toBe("takenaka");
  });

  test("スペースを一つ含む文字列を通す", () => {
    const userName = new UserName("kyouhi yamagata");
    expect(userName.value).toBe("kyouhi yamagata");
  });

  test("0文字は例外を返す", () => {
    expect(() => {
      new UserName("");
    }).toThrow(new Error(`ユーザー名は１文字以上の文字列である必要があります`));
  });

  test("文字列以外の場合は例外を返す", () => {
    expect(() => {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      new UserName(123 as any);
    }).toThrow(new Error(`ユーザー名は１文字以上の文字列である必要があります`));
  });
});

import { sum } from './App'

// 声明自定义的匹配器
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeWithinRange(a: number, b: number): R
    }
    interface Expect {
      toBeWithinRange(a: number, b: number): void
    }
    interface InverseAsymmetricMatchers {
      toBeWithinRange(a: number, b: number): void
    }
  }
}

describe('测试日历util方法', () => {
  it('测试', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      }
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      }
    }
  },
})

test('numeric ranges', () => {
  expect(sum(45, 50)).toBeWithinRange(90, 110)
  expect(101).not.toBeWithinRange(0, 100)
  expect({ apples: 6, bananas: 3 }).toEqual({
    apples: expect.toBeWithinRange(1, 10),
    bananas: expect.not.toBeWithinRange(11, 20),
  })
})

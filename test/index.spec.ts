import { jest, expect, afterAll, afterEach, beforeAll, beforeEach, describe,
  fdescribe, xdescribe, test, it, fit, xtest, xit } from '../src/index'

test('test should checkmark', () => {})

test('expect should match', () => {
  expect('').toBe('')
})

test('jest.fn should mock', () => {
  const fn = jest.fn()
  fn()
  expect(fn).toBeCalledTimes(1)
})

describe('describe should create a section', () => {
  it('it should checkmark', () => {})
})

describe('before/after', () => {
  let varBA = ''
  beforeAll(() => {
    varBA = 'varBA'
  })
  test('beforeAll should run before all tests', () => {
    expect(varBA).toBe('varBA')
  })

  let countTestsBefore = 0
  beforeEach(() => {
    countTestsBefore++
  })
  test('beforeEach should run before each test', () => {
    expect(countTestsBefore).toBe(2)
  })

  let countTestsAfter = 0
  afterEach(() => {
    countTestsAfter++
  })
  test('afterEach should run after each test', () => {
    expect(countTestsAfter).toBe(2)
  })

  let varAA = ''
  afterAll(() => {
    varAA = 'varAA'
  })
  test('afterAll should run after all tests', () => {
    expect(varAA).toBe('')
  })
})

describe('existence of the rest', () => {
  test('fdescribe exists', () => {
    expect(fdescribe).not.toBeNull()
  })
  test('xdescribe exists', () => {
    expect(xdescribe).not.toBeNull()
  })
  test('fit exists', () => {
    expect(fit).not.toBeNull()
  })
  test('xtest exists', () => {
    expect(xtest).not.toBeNull()
  })
  test('xit exists', () => {
    expect(xit).not.toBeNull()
  })
})

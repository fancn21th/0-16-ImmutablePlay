import foo from './index'

describe('first test', function () {
  it('foo equal to bar', function () {
    expect(foo()).toBe('bar')
  })
})

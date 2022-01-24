import { Dollar } from '../src/dollar'

describe('Dollar', () => {
  it('should return 10 when 5 dollars is multiplied by 2', () => {
    const five = new Dollar(5)
    five.times(2)
    expect(five.amount).toBe(10)
  })
})

import { Dollar } from '../src/dollar'

describe('Dollar', () => {
  it('should return 10 when 5 dollars is multiplied by 2', () => {
    const five = new Dollar(5)
    let product: Dollar = five.times(2)
    expect(product.amount).toBe(10)
    product = five.times(3)
    expect(product.amount).toBe(15)
  })
})

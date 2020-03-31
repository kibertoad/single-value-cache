import { SingleValueCache } from '../lib/SingleValueCache'

describe('SingleValueCache', () => {
  it('happy path', () => {
    const cache = new SingleValueCache(500)
    cache.set('token')
    const token = cache.get()
    expect(token).toEqual('token')
  })

  it('default value is undefined', () => {
    const cache = new SingleValueCache(500)
    const token = cache.get()
    expect(token).toBeUndefined()
  })

  it('clears value correctly', () => {
    const cache = new SingleValueCache(500)
    cache.set('token')
    cache.clear()
    const token = cache.get()
    expect(token).toBeUndefined()
  })

  it('modifies value correctly', () => {
    const cache = new SingleValueCache(500)
    cache.set('token')
    cache.set('token2')
    const token = cache.get()
    expect(token).toEqual('token2')
  })

  it('expires value correctly', (done) => {
    const cache = new SingleValueCache(500)
    cache.set('token')

    setTimeout(() => {
      const token = cache.get()
      expect(token).toBeUndefined()
      done()
    }, 1000)
  })
})

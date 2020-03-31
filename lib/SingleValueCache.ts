import { addMilliseconds, isBefore } from 'date-fns'

export class SingleValueCache<V> {
  private readonly ttl: number
  private value: V | undefined
  private validUntil: Date

  constructor(ttl: number) {
    this.ttl = ttl
    this.value = undefined
    this.validUntil = new Date(0)
  }

  set(value: V, ttl?: number) {
    const now = new Date()
    this.validUntil = addMilliseconds(now, ttl || this.ttl)
    this.value = value
  }

  get(): V | undefined {
    const now = new Date()
    if (isBefore(now, this.validUntil)) {
      return this.value
    }
    this.clear()
    return undefined
  }

  clear() {
    this.validUntil = new Date(0)
    this.value = undefined
  }
}

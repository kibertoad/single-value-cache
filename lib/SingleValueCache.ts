import { addMilliseconds, isBefore } from 'date-fns'

export class SingleValueCache<V> {
  private readonly ttlInMsecs: number
  private value: V | undefined
  private validUntil: Date

  constructor(ttlInMsecs: number) {
    this.ttlInMsecs = ttlInMsecs
    this.validUntil = new Date(0)
    this.value = undefined
  }

  set(value: V, ttlInMsecs?: number) {
    const now = new Date()
    this.validUntil = addMilliseconds(now, ttlInMsecs || this.ttlInMsecs)
    this.value = value
  }

  get(): V | undefined {
    const now = new Date()

    // If value didn't expire, return it
    if (isBefore(now, this.validUntil)) {
      return this.value
    }

    return undefined
  }

  clear() {
    this.validUntil = new Date(0)
    this.value = undefined
  }
}

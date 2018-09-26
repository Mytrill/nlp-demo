const ALPHABET =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_"
const SIZE = 12
const rand = () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)]

/** Function to generate a GUID. */
export const guid = (): string =>
  Array.apply(null, Array(SIZE))
    .map(rand)
    .join("")

/** Transform possible error objets in a message. */
export function getErrorMessage(error: string | Error): string {
  if (typeof error === "string") {
    return error
  }
  return error.message
}

export function getUrlParameter(name: string): string | null {
  const url = new URL(location.href)
  return url.searchParams.get(name)
}

/** Returns a promise that resolves to the given values after some times. Used to test delays in REST calls. */
export function delay<T>(value?: T): Promise<T> {
  return Promise.resolve().then(
    () => new Promise<T>(resolve => setTimeout(() => resolve(value), 1000))
  )
}

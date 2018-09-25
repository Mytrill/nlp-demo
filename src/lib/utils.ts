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

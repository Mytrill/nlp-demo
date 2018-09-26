import { ParsedRequest } from "./api"

export function parseRequestText(text: string): Promise<ParsedRequest> {
  return fetch(
    `http://localhost:5000/parse?sentence=${encodeURIComponent(text)}`,
    {
      method: "GET"
    }
  ).then(response => {
    return response.json()
  })
}

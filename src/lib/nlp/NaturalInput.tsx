import { h } from "hyperapp"
import { cc } from "lib/classcat"

import { Status } from "./api"

export interface NaturalInputProps {
  status: Status
  placeholder: string
  onSearch(text: string)
  class?: string
}

export function NaturalInput(props: NaturalInputProps) {
  const { status, placeholder, onSearch } = props
  return (
    <form
      onsubmit={(e: Event) => {
        e.preventDefault()
        if (status !== "waiting") {
          return
        }
        onSearch(e.target[0].value)
      }}
      class={cc(props.class)}
    >
      <div class="input-group">
        <span class="input-group-addon">
          {status === "loading" && <span class="mx-2 loading" />}
          {status === "waiting" && <span>zZz</span>}
          {status === "success" && <span>:)</span>}
          {status === "error" && <span>:(</span>}
        </span>
        <input
          type="text"
          id="search-input"
          class="form-input"
          placeholder={placeholder}
          readonly={status === "loading"}
        />
      </div>
    </form>
  )
}

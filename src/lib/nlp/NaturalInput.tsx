import { h } from "hyperapp"
import { cc } from "lib/classcat"

import { InputStatus, LogEntry } from "./api"
import { NaturalChat } from "./NaturalChat"

export interface NaturalInputProps {
  status: InputStatus
  placeholder: string
  onSearch(text: string)
  entries: LogEntry[]
  displayCount: number
  onToggleChat(): void
  class?: string
}

export function NaturalInput(props: NaturalInputProps) {
  const { status, placeholder, onSearch, displayCount, entries } = props

  const chatShown = displayCount > 0

  return (
    <div>
      <form
        onsubmit={(e: Event) => {
          e.preventDefault()
          if (status === "loading") {
            return
          }

          console.log("onSearch", e.target[1].value)
          onSearch(e.target[1].value)
        }}
        class={cc(props.class)}
      >
        <div class="input-group">
          <button
            class={cc(["btn input-group-btn", { active: chatShown }])}
            onclick={props.onToggleChat}
            type="button"
          >
            {status === "loading" && <span class="mx-2 loading" />}
            {status === "waiting" && <span>zZz</span>}
            {status === "success" && <span>:)</span>}
            {status === "error" && <span>:(</span>}
          </button>
          <input
            type="text"
            id="search-input"
            class="form-input"
            placeholder={placeholder}
            readonly={status === "loading"}
          />
        </div>
      </form>
      {NaturalChat({ displayCount, onClose: props.onToggleChat, entries })}
    </div>
  )
}

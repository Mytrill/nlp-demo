import { h } from "hyperapp"

import { LogEntry } from "./api"

import "./NaturalChat.scss"

interface EntryEventProps {
  entry: LogEntry
}

function EntryEvent(props: EntryEventProps) {
  const { entry } = props

  return (
    <div class={`entry-event entry-event__${entry.type}`}>{entry.text}</div>
  )
}

interface CloseButtonProps {
  onClose(): void
}

function CloseButton(props: CloseButtonProps) {
  return <button class="btn btn-clear close-button" onclick={props.onClose} />
}

export interface NaturalChatProps {
  displayCount: number
  entries: LogEntry[]
  onClose(): void
}

export function NaturalChat(props: NaturalChatProps) {
  const { displayCount, entries } = props

  if (displayCount === 0) {
    return null
  }
  const count = entries.length
  if (count === 0) {
    return (
      <div class="natural-chat natural-chat__multi">
        <span class="entry-event__empty">Empty.</span>
        {CloseButton(props)}
      </div>
    )
  }

  const children = []
  const last = count
  const first = Math.max(count - displayCount, 0)
  for (let i = first; i < last; i++) {
    children.push(EntryEvent({ entry: entries[i] }))
  }

  return (
    <div class="natural-chat">
      {children}
      {CloseButton(props)}
    </div>
  )
}

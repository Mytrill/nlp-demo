import { h } from "hyperapp"
import { cc } from "lib/classcat"

export interface TitleProps {
  class?: string
  tag?: string
  children?: any
}

export function Title(props: TitleProps, children: any) {
  return (
    <p class={cc(["empty-title", props.tag || "h4", props.class])}>
      {props.children || children}
    </p>
  )
}

export interface SubtitleProps {
  class?: string
  children?: any
}

export function Subtitle(props: TitleProps, children: any) {
  return (
    <p class={cc(["empty-subtitle", props.class])}>
      {props.children || children}
    </p>
  )
}

export interface EmptyProps {
  class?: string
}

const _Empty: any = (props: EmptyProps, children: any) => {
  return <div class={cc(["empty", props.class])}>{children}</div>
}

export interface EmptyComponent {
  (props: EmptyProps, children: any): any
  Title(props: TitleProps, children: any): any
  Subtitle(props: SubtitleProps, children: any): any
}
_Empty.Title = Title
_Empty.Subtitle = Subtitle

export const Empty = _Empty as EmptyComponent

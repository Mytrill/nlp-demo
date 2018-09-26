import { h } from "hyperapp"
import { cc } from "lib/classcat"

import "./Panel.scss"

export interface HeaderProps {
  class?: string
}

export function Header(props: HeaderProps, children: any) {
  return <div class={cc(["panel-header", props.class])}>{children}</div>
}

export interface TitleProps {
  class?: string
  tag?: string
  children?: any
}

export function Title(props: TitleProps, children: any) {
  return (
    <div class={cc(["panel-title", props.tag || "h3", props.class])}>
      {props.children || children}
    </div>
  )
}

export interface SubtitleProps {
  class?: string
  children?: any
}

export function Subtitle(props: TitleProps, children: any) {
  return (
    <div class={cc(["panel-subtitle", props.class])}>
      {props.children || children}
    </div>
  )
}

export interface TabsProps {
  class?: string
}

export function Tabs(props: TabsProps, children: any) {
  return (
    <div class={cc(["panel-nav", props.class])}>
      <ul class="tab tab-block">{children}</ul>
    </div>
  )
}

export interface TabProps {
  label: string
  id: string
  selected: boolean
  onSelect(e: any): void
}

export function Tab(props: TabProps) {
  const { label, id, onSelect, selected } = props
  return (
    <li class={cc(["tab-item", selected && "active"])} id={id}>
      <a href="#" onclick={onSelect}>
        {label}
      </a>
    </li>
  )
}

export interface BodyProps {
  class?: string
  visible?: boolean
}

export function Body(props: BodyProps, children: any) {
  if (props.visible === false) {
    return null
  }
  return <div class={cc(["panel-body", props.class])}>{children}</div>
}

export interface ValueProps {
  label: string
  value: string
}

export function Value(props: ValueProps) {
  const { label, value } = props
  return (
    <div class="columns">
      <div class="col-3 text-bold">{label}</div>
      <div class="col-9">{value}</div>
    </div>
  )
}

export interface PanelProps {
  class?: string
}

const _Panel: any = (props: PanelProps, children: any) => {
  return <div class={cc(["panel", props.class])}>{children}</div>
}
_Panel.Header = Header
_Panel.Title = Title
_Panel.Subtitle = Subtitle
_Panel.Tabs = Tabs
_Panel.Tab = Tab
_Panel.Body = Body
_Panel.Value = Value

export interface PanelComponent {
  (props: PanelProps, children: any): any
  Header(props: HeaderProps, childen: any): any
  Title(props: TitleProps, childen: any): any
  Subtitle(props: SubtitleProps, childen: any): any
  Tabs(props: TabsProps, childen: any): any
  Tab(props: TabProps, children: any): any
  Body(props: BodyProps, childen: any): any
  Value(props: ValueProps, children: any): any
}

export const Panel = _Panel as PanelComponent

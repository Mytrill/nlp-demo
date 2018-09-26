import { h } from "hyperapp"
import { cc } from "lib/classcat"
import { Link } from "lib/router"

export interface TitleProps {
  children?: any
  class?: string
  href?: string
}

export function Title(props: TitleProps, children: any) {
  const { href } = props

  if (href) {
    return (
      <div class={cc(["tile-title text-bold", props.class])}>
        <Link href={href}>{props.children || children}</Link>
      </div>
    )
  }
  return (
    <div class={cc(["tile-title text-bold", props.class])}>
      {props.children || children}
    </div>
  )
}

export interface SubtitleProps {
  children?: any
  class?: string
}

export function Subtitle(props: SubtitleProps, children: any) {
  return (
    <div class={cc(["tile-subtitle", props.class])}>
      {props.children || children}
    </div>
  )
}

export interface ContentProps {
  // empty
}

export function Content(_: ContentProps, children: any) {
  return <div class="tile-content">{children}</div>
}

export interface TileProps {
  class?: string
  compact?: boolean
}

const _Tile: any = (props: TileProps, children: any) => {
  const { compact } = props
  return (
    <div class={cc(["tile", compact && "tile-centered", props.class])}>
      {children}
    </div>
  )
}
_Tile.Content = Content
_Tile.Title = Title
_Tile.Subtitle = Subtitle

export interface TileComponent {
  (props: TileProps, children: any): any
  Content(props: ContentProps, children: any): any
  Title(props: TitleProps, children: any): any
  Subtitle(props: SubtitleProps, children: any): any
}

export const Tile = _Tile as TileComponent

import { h } from "hyperapp"

import { Person } from "../people/api"

interface PanelProps {
  class?: string
}

function Panel(props: PanelProps, children: any) {
  return <div class={"panel " + (props.class || "")}>{children}</div>
}

interface HeaderProps {
  class?: string
}

function Header(props: HeaderProps, children: any) {
  return <div class={"panel-header " + (props.class || "")}>{children}</div>
}

interface TitleProps {
  class?: string
  tag?: string
}

function Title(props: TitleProps, children: any) {
  return (
    <div class={"panel-title " + (props.tag || "h3") + (props.class || "")}>
      {children}
    </div>
  )
}

interface TabsProps {
  class?: string
}

function Tabs(props: TabsProps, children: any) {
  return (
    <div class={"panel-nav " + (props.class || "")}>
      <ul class="tab tab-block">{children}</ul>
    </div>
  )
}

interface TabProps {
  label: string
  id: string
  selected: boolean
  onSelect(e: any): void
}

function Tab(props: TabProps) {
  const { label, id, onSelect, selected } = props
  return (
    <li class={`tab-item ${selected ? "active" : ""}`} id={id}>
      <a href="#" onclick={onSelect}>
        {label}
      </a>
    </li>
  )
}

interface BodyProps {
  class?: string
}

function Body(props: BodyProps, children: any) {
  return <div class={"panel-body " + (props.class || "")}>{children}</div>
}

interface _TileTitleProps {
  header: string
  headerHref?: string
}

function _TileTitle(props: _TileTitleProps) {
  const { header, headerHref } = props

  if (headerHref) {
    return (
      <div class="tile-title text-bold">
        <a href={headerHref}>{header}</a>
      </div>
    )
  }
  return <div class="tile-title text-bold">{header}</div>
}

interface TileProps {
  class?: string
  header: string
  headerHref?: string
  subtitle?: string
}

function Tile(props: TileProps) {
  const { header, headerHref, subtitle } = props
  return (
    <div class={"tile tile-centered " + (props.class || "")}>
      <div class="tile-content">
        <_TileTitle header={header} headerHref={headerHref} />
        {subtitle && <div class="tile-subtitle">{subtitle}</div>}
      </div>
    </div>
  )
}

interface ValueProps {
  label: string
  value: string
}

function Value(props: ValueProps) {
  const { label, value } = props
  return (
    <div class="columns">
      <div class="col-3 text-bold">{label}</div>
      <div class="col-9">{value}</div>
    </div>
  )
}

export interface PersonPanelProps {
  person: Person
  tab: "details" | "teams" | "projects"
}

export function PersonPanel(props: PersonPanelProps) {
  const { person, tab } = props

  return (
    <Panel>
      <Header>
        <Title>{person.name}</Title>
      </Header>
      <Tabs>
        <Tab
          label="Details"
          id="details"
          selected={tab === "details"}
          onSelect={() => {}}
        />
        <Tab
          label="Teams"
          id="teams"
          selected={tab === "teams"}
          onSelect={() => {}}
        />
        <Tab
          label="Projects"
          id="projects"
          selected={tab === "projects"}
          onSelect={() => {}}
        />
      </Tabs>
      <Body>
        <Value label="External" value={person.external ? "Yes" : "No"} />
      </Body>
    </Panel>
  )
}

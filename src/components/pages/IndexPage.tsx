import { h } from "hyperapp"

import "./IndexPage.scss"

export interface IndexPageProps {
  // nothing
}

export function IndexPage(props: IndexPageProps) {
  return (
    <div class="container">
      <h1>Index Page</h1>
      <p>Some description goes here...</p>

      <h3>Example Queries</h3>
      <ul>
        <li>How many people are in team X?</li>
        <li>How old is X?</li>
        <li>When did project X start?</li>
        <li>Who is in team X?</li>
        <li>Get the name of people in the X project?</li>
        <li>When did project X start?</li>
        <li>Who leads team X</li>
        <li>Is X in team Y?</li>
      </ul>
    </div>
  )
}

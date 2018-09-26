import { app, h } from "hyperapp"

import { state } from "modules/state"
import { actions } from "modules/actions"
import { view } from "./view"

app(state, actions, view, document.getElementById("app")).router.init()

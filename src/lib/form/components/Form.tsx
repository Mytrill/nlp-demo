import { h } from "hyperapp"

import { State, Actions } from "../api"
import { FormField, Field } from "./FormField"

export interface FormProps {
  state: State
  actions: Actions
  title?: string
  submit()
  fields: Field[]
  fieldSize?: "sm" | "lg"
  fieldClass?: string
  horizontal?: string[]
  submitText?: string
  class?: string
}

export function Form(props: FormProps) {
  const {
    state,
    actions,
    fields,
    horizontal = ["col-sm-12", "col-12 col-sm-12"],
    fieldSize,
    fieldClass = "",
    submitText = "Submit"
  } = props
  const className = fieldSize ? `${fieldClass} input-${fieldSize}` : fieldClass
  return (
    <form
      oncreate={e => e.elements[0].focus()}
      onsubmit={e => {
        e.preventDefault()
        props.submit()
      }}
      class={
        horizontal ? `form-horizontal ${props.class || ""}` : props.class || ""
      }
    >
      {props.title && <h3>{props.title}</h3>}
      {fields.map(f =>
        FormField({
          ...f,
          state: state[f.name],
          setField: actions.setField,
          horizontal,
          class: className
        })
      )}
      <div class="text-right py-6">
        <button class="btn btn-primary btn-medium-font" type="submit">
          {submitText}
        </button>
      </div>
    </form>
  )
}

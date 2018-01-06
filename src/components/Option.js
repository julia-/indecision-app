import React from 'react'

const Option = props => (
  <div>
    <li key={props.index}>{props.optionText}</li>
    <button onClick={() => props.handleDeleteOption(props.optionText)}>
      Remove
    </button>
  </div>
)

export default Option

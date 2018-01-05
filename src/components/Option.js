import React from 'react'

const Option = props => {
  return (
    <div>
      <li key={props.index}>{props.optionText}</li>
      <button onClick={e => props.handleDeleteOption(props.optionText)}>
        Remove
      </button>
    </div>
  )
}

export default Option

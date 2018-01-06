import React from 'react'
import Option from './Option'

const Options = props => (
  <div>
    <h2>Options</h2>
    {props.options.length > 0 ? (
      <div>
        <button onClick={props.handleDeleteAllOptions}>Remove options</button>
        <div>
          <ol>
            {props.options.map((option, index) => (
              <Option
                key={index}
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
              />
            ))}
          </ol>
        </div>
      </div>
    ) : (
      <p>No options added. Add an option!</p>
    )}
  </div>
)

export default Options

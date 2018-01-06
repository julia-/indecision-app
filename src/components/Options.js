import React from 'react'
import Option from './Option'

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your options</h3>{' '}
      {props.options.length > 0 && (
        <button className="button--link" onClick={props.handleDeleteAllOptions}>
          Remove all
        </button>
      )}
    </div>
    {props.options.length > 0 ? (
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
    ) : (
      <p className="widget__message">No options added. Add an option!</p>
    )}
  </div>
)

export default Options

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)

    this.state = {
      options: props.options
    }
  }

  handlePick() {
    const options = this.state.options
    const randomNumber = Math.floor(Math.random() * options.length)
    const option = options[randomNumber]
    alert(option)
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter a valid option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }))
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer'

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision App'
}

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  )
}

const Options = props => {
  return (
    <div>
      <h2>Here are your options</h2>
      <button onClick={props.handleDeleteOptions}>Remove options</button>
      <ol>
        {props.options.map((option, index) => (
          <Option key={index} optionText={option} />
        ))}
      </ol>
    </div>
  )
}

const Option = props => {
  return <li key={props.index}>{props.optionText}</li>
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    e.target.elements.option.value = ''
    this.setState(() => ({ error }))
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

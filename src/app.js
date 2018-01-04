class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)

    this.state = {
      options: []
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

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  render() {
    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of a computer'

    return (
      <div>
        <Header
          title={title}
          subtitle={subtitle}
        />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

const Action = props => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  )
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <h2>Here are your options</h2>
        <button onClick={this.props.handleDeleteOptions}>Remove options</button>
        <ol>
          {this.props.options.map((option, index) => (
            <Option key={index} optionText={option} />
          ))}
        </ol>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return <li key={this.props.index}>{this.props.optionText}</li>
  }
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

    this.setState(() => {
      return { error }
    })
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
